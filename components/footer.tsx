import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box textAlign="center" p="5" color="gray.600">
      &copy; {new Date().getFullYear()} NGUYEN CHI HAI. All Rights Reserved.
    </Box>
  );
};

export default Footer;
