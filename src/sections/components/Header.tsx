import React, { useRef } from "react";

import { Grid, Flex, Box, Text } from "@mantine/core";
import { useInView, motion } from "framer-motion";

import { useMediaQuery } from "@mantine/hooks";
const gutter = {
    base: "20px",
};

function Header() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: "all" });
    const isMobile = useMediaQuery("(max-width: 1020px)");

    return (
        <Grid gutter={gutter} columns={isMobile ? 4 : 8} ref={ref}>
            <Grid.Col span={isMobile ? 2 : 6}>
                <Flex gap={"10px"}>
                    <Box
                        w="1em"
                        h="1em"
                        style={{
                            aspectRatio: 1,
                            backgroundColor: "var(--mantine-color-black)",
                        }}
                    ></Box>
                    <Text style={{ lineHeight: "1em" }}>HAN XHENG CHEW</Text>
                </Flex>
            </Grid.Col>
            <Grid.Col span={1} style={{ lineHeight: "1em" }}>
                portfolio
            </Grid.Col>
            <Grid.Col span={1} style={{ lineHeight: "1em" }}>
                2024
            </Grid.Col>
            <Grid.Col span={isMobile ? 4 : 8} pb={0}>
                <motion.div
                    style={{
                        borderBottom: "1px solid var(--mantine-color-black)",
                        width: "100%",
                        marginTop: "-15px",
                    }}
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        ease: "easeInOut",
                        duration: "2",
                        type: "tween",
                        stiffness: 20,
                    }}
                ></motion.div>
            </Grid.Col>
        </Grid>
    );
}

export default Header;
