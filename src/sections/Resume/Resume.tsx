import { Box, Container, Flex, Grid, Text } from "@mantine/core";
import "@mantine/core/styles.css";

import React from "react";

export default function Resume() {
    const gutter = {
        base: "20px",
    };
    return (
        <Grid
            gutter={gutter}
            columns={8}
            w="100%"
            style={{
                backgroundColor: "var(--mantine-color-black)",
                color: "var(--mantine-color-white)",
            }}
            p="20px 70px 20px 70px"
        >
            <Grid.Col span={8} mt="5vh">
                <Box
                    style={{
                        borderBottom: "1px solid var(--mantine-color-white)",
                    }}
                    w="100%"
                ></Box>
            </Grid.Col>
            <Grid.Col span={8}>
                <Text>03</Text>
                <Text
                    style={{
                        fontSize: "100px",
                        lineHeight: "100px",
                    }}
                >
                    RESUME
                </Text>
            </Grid.Col>
            <Grid.Col span={5} h={"70vh"}>
                <iframe
                    src="https://drive.google.com/file/d/10XX7-1FERjroU8OAjjMkFIwQT_3tvX1r/preview"
                    width={"100%"}
                    height={"100%"}
                    style={{ border: "1px solid var(--mantine-color-white)" }}
                />
            </Grid.Col>
            <Grid.Col span={1} h={"70vh"}>
                <Box
                    w="100%"
                    h="100%"
                    style={{ border: "1px solid var(--mantine-color-white)" }}
                ></Box>
            </Grid.Col>
            <Grid.Col span={1} h={"70vh"}>
                <Box
                    w="100%"
                    h="100%"
                    style={{ border: "1px solid var(--mantine-color-white)" }}
                ></Box>
            </Grid.Col>
            <Grid.Col span={1} h={"70vh"}>
                <Box
                    w="100%"
                    h="100%"
                    style={{ border: "1px solid var(--mantine-color-white)" }}
                ></Box>
            </Grid.Col>

            <Grid.Col span={8} mb="5vh">
                <Box
                    style={{
                        borderBottom: "1px solid var(--mantine-color-white)",
                    }}
                    w="100%"
                ></Box>
            </Grid.Col>
        </Grid>
    );
}
