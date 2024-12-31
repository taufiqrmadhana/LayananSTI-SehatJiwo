// pages/chat.js atau sesuai struktur proyek Anda

"use client";
import { createStyles, Card, Text, ScrollArea } from "@mantine/core";
import useSocketStore from "@/store/socket";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { MessageWithMe, SocketPrivateMessage, SocketBroadcastMessage } from "@/types/next";
import ChatroomTitle from "@/components/ChatroomTitle";
import ChatroomInput from "@/components/ChatroomInput";
import Header from "@/components/header"; // Pastikan path ini sesuai dengan struktur proyek Anda

const useStyles = createStyles((theme) => ({
    rightMessageField: {
        display: "flex",
        position: "relative",
        flexDirection: "row-reverse",
        width: "100%",
        marginTop: theme.spacing.xs,
        marginBottom: theme.spacing.xs,
        // Responsive adjustment
        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column-reverse",
        },
    },
    rightMessage: {
        width: "fit-content",
        padding: theme.spacing.xs,
        overflowWrap: "break-word",
        borderRadius: theme.radius.lg,
        backgroundColor: theme.colors.green[2],
        maxWidth: "50em",
        [theme.fn.smallerThan("md")]: {
            maxWidth: "35em",
        },
        [theme.fn.smallerThan("sm")]: {
            maxWidth: "90%", // Adjusted for mobile
        },
    },
    leftMessageField: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        position: "relative",
        marginTop: theme.spacing.xs,
        marginBottom: theme.spacing.xs,
        // Responsive adjustment
        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
        },
    },
    leftMessage: {
        width: "fit-content",
        padding: theme.spacing.xs,
        overflowWrap: "break-word",
        borderRadius: theme.radius.lg,
        backgroundColor: theme.colors.gray[2],
        maxWidth: "50em",
        [theme.fn.smallerThan("md")]: {
            maxWidth: "35em",
        },
        [theme.fn.smallerThan("sm")]: {
            maxWidth: "90%", // Adjusted for mobile
        },
    },
    avatar: {
        width: "fit-content",
        display: "flex",
        flexWrap: "nowrap",
        fontSize: theme.fontSizes.xs,
        color: theme.colors.gray[5],
        marginRight: theme.spacing.xs,
        alignItems: "center",
        [theme.fn.smallerThan("sm")]: {
            marginBottom: theme.spacing.xs, // Add spacing below avatar on mobile
        },
    },

    timestamp: {
        width: "fit-content",
        display: "flex",
        flexWrap: "nowrap",
        fontSize: theme.fontSizes.xs,
        color: theme.colors.gray[5],
        marginLeft: theme.spacing.xs,
        marginRight: theme.spacing.xs,
        alignItems: "flex-end",
        [theme.fn.smallerThan("sm")]: {
            alignSelf: "flex-end", // Align timestamp to the end on mobile
        },
    },
}));

export default function Home() {
    const { classes } = useStyles();
    const { socket, connect } = useSocketStore(); // deconstructing socket and its method from socket store
    const chatViewportRef = useRef<HTMLDivElement>(null); // binding chat viewport ref to scroll to bottom
    const [targetSocketId, setTargetSocketId] = useState<string>(""); // target socket id input value
    const [messages, setMessages] = useState<MessageWithMe[]>([]); // show messages on ScrollArea
    const [onlineUsers, setOnlineUsers] = useState<Record<string, string>>({}); // online users

    const scrollToBottom = () => {
        chatViewportRef?.current?.scrollTo({
            top: chatViewportRef.current.scrollHeight,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        connect();
    }, [connect]);

    useEffect(() => {
        if (!socket) return;
        socket.on("private_message", (message: SocketPrivateMessage) => {
            setMessages((state) => [...state, { ...message, me: message.from === socket?.id }]);
        });
        socket.on("broadcast", (message: SocketBroadcastMessage) => {
            setMessages((state) => [...state, { ...message, me: message.from === socket?.id }]);
        });
        socket.on("online_user", (onlineUsers: Record<string, string>) => {
            setOnlineUsers(onlineUsers);
        });
        return () => {
            socket.off("private_message");
            socket.off("online_user");
            socket.off("broadcast");
        };
    }, [socket]);

    useLayoutEffect(() => {
        scrollToBottom(); // Execute after DOM render
    }, [messages]);

    return (
        <div className="flex h-screen">
            {/* Header Component */}
            <Header />

            {/* Main Content */}
            <main className="flex-1 ml-0 md:ml-64 pt-16 md:pt-0 bg-[#FBFADA] overflow-y-auto">
                <div className="p-2 sm:p-4 h-full">
                    <Card
                        shadow="sm"
                        padding="sm"
                        radius="md"
                        withBorder
                        className="flex flex-col h-full"
                    >
                        <Card.Section
                            withBorder
                            className="flex-none"
                        >
                            <ChatroomTitle
                                targetSocketId={targetSocketId}
                                setTargetSocketId={setTargetSocketId}
                            />
                        </Card.Section>
                        <Card.Section className="flex-1 overflow-y-auto">
                            <ScrollArea
                                offsetScrollbars
                                viewportRef={chatViewportRef}
                                className="h-full"
                            >
                                {messages.map((message, index) => (
                                    <div
                                        className={
                                            message.me
                                                ? classes.rightMessageField
                                                : classes.leftMessageField
                                        }
                                        key={message.timestamp + index}
                                    >
                                        {!message.me && (
                                            <div className={classes.avatar}>
                                                <Avatar
                                                    alt={onlineUsers[message.from]}
                                                    color="blue"
                                                    radius="xl"
                                                >
                                                    {onlineUsers[message.from] &&
                                                    onlineUsers[message.from].length > 5
                                                        ? `${onlineUsers[message.from].slice(0, 1)}`
                                                        : onlineUsers[message.from]}
                                                </Avatar>
                                            </div>
                                        )}
                                        <div className="flex flex-col">
                                            <Text
                                                className={
                                                    message.me
                                                        ? classes.rightMessage
                                                        : classes.leftMessage
                                                }
                                                size="sm"
                                            >
                                                {message.message.split("\n").map((line, idx) => (
                                                    <span key={idx}>
                                                        {line}
                                                        <br />
                                                    </span>
                                                ))}
                                            </Text>
                                            <Text size="xs" className={classes.timestamp}>
                                                {new Date(message.timestamp).toLocaleTimeString()}
                                            </Text>
                                        </div>
                                    </div>
                                ))}
                            </ScrollArea>
                        </Card.Section>

                        <Card.Section className="flex-none">
                            <ChatroomInput targetSocketId={targetSocketId} />
                        </Card.Section>
                    </Card>
                </div>
            </main>
        </div>
    );
}
