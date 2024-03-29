import { Button, Wrap, WrapItem } from "@chakra-ui/react";
import React, { memo } from "react";
import { IoLogoGithub, IoLogoTwitter, IoAlertCircleOutline, IoMailOutline} from "react-icons/io5";

const Links = () => {
  return (
    <Wrap spacing={1} justify="center" maxW="sm">
      <WrapItem>
        <Button as="a" href="https://l.axesys.xyz/github" variant="ghost" size="sm" leftIcon={<IoLogoGithub />}>
          GitHub
        </Button>
      </WrapItem>

      <WrapItem>
        <Button as="a" href="https://l.axesys.xyz/twitter" variant="ghost" size="sm" leftIcon={<IoLogoTwitter />}>
          Twitter
        </Button>
      </WrapItem>

      <WrapItem>
        <Button as="a" href="mailto:hello@axesys.xyz" variant="ghost" size="sm" leftIcon={<IoMailOutline />}>
          Mail
        </Button>
      </WrapItem>

      <WrapItem>
        <Button as="a" href="https://l.axesys.xyz/status" variant="ghost" size="sm" leftIcon={<IoAlertCircleOutline />}>
          Status
        </Button>
      </WrapItem>

    </Wrap>
  );
};

export default memo(Links);
