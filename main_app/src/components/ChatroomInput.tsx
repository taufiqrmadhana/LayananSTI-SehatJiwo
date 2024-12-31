// components/ChatroomInput.js

"use client";
import { Group, Textarea, ActionIcon, createStyles, useMantineTheme } from "@mantine/core";
import { IconSend } from "@tabler/icons-react";
import { KeyboardEvent, FC, useRef, useState } from "react";
import useSocketStore from "@/store/socket";
import toast from "react-hot-toast";

type Props = {
    targetSocketId: string;
};

const useStyles = createStyles((theme) => ({
    Textarea: {
        border: "none",
        resize: "none",
        // Responsive font size
        fontSize: theme.fontSizes.sm,
        // Placeholder styling
        "&::placeholder": {
            color: theme.colors.gray[4],
        },
    },
}));

const ChatroomInput: FC<Props> = ({ targetSocketId }) => {
    const { socket, emitMode, emit } = useSocketStore(); // deconstructing socket and its method from socket store
    const [message, setMessage] = useState(""); // message input value
    const messageInputRef = useRef<HTMLTextAreaElement>(null); // binding message input ref to focus
    const { classes } = useStyles();
    const theme = useMantineTheme();

    const sendMessage = () => {
        if (!message.trim()) return toast.error("Please enter a message");
        if (!socket?.connected) return toast.error("Please reconnect server first");
        if (!targetSocketId && emitMode === "private_message")
            return toast.error("Please enter a target socket id");

        switch (emitMode) {
            case "private_message": {
                const messageObj = {
                    from: socket?.id,
                    to: targetSocketId,
                    timestamp: Date.now(),
                    message,
                };
                emit("private_message", messageObj);
                break;
            }
            case "broadcast": {
                const broadcastObj = {
                    from: socket?.id,
                    timestamp: Date.now(),
                    message,
                };
                emit("broadcast", broadcastObj);
                break;
            }
            default:
                break;
        }
        setMessage("");
        messageInputRef.current?.focus();
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey && !e.altKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <Group
            w="100%"
            className="flex-col sm:flex-row"
            position="apart"
            noWrap
            spacing="xs"
        >
            <Textarea
                className={classes.Textarea}
                minRows={3}
                maxRows={7}
                ref={messageInputRef}
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value)}
                placeholder="Type a message..."
                onKeyDown={handleKeyDown}
                autosize
                className="w-full sm:w-11/12"
                styles={{
                    input: {
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
                        color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[9],
                    },
                }}
            />
            <ActionIcon
                radius="xl"
                color="blue"
                size="lg"
                onClick={sendMessage}
                className="w-full sm:w-auto mt-2 sm:mt-0"
                aria-label="Send Message"
            >
                <IconSend stroke={1.5} size="1.25rem" />
            </ActionIcon>
        </Group>
    );
};

export default ChatroomInput;
