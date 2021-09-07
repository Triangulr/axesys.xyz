import { Button, Wrap, WrapItem } from "@chakra-ui/react";
import React, { memo } from "react";
import { IoLogoGithub, IoLogoTwitter, IoCodeSlash, IoAlertCircleOutline, IoMailOutline} from "react-icons/io5";

const Links = () => {
  return (
  <Wrap>
    <Wrap spacing={1} justify="center" maxW="sm">
      <WrapItem>
        <Button as="a" href="https://github.com/triangulr" variant="ghost" size="sm" leftIcon={<IoLogoGithub />}>
          GitHub
        </Button>
      </WrapItem>

      <WrapItem>
        <Button as="a" href="https://twitter.com/_triangulr" variant="ghost" size="sm" leftIcon={<IoLogoTwitter />}>
          Twitter
        </Button>
      </WrapItem>

  <WrapItem>
        <Button as="a" href="mailto:hello@axesys.xyz" variant="ghost" size="sm" leftIcon={<IoMailOutline />}>
          Mail
        </Button>
      </WrapItem>
    </Wrap>
      
   <WrapItem>
        <Button as="a" href="https://status.axesys.xyz" variant="ghost" size="sm" leftIcon={<IoAlertCircleOutline />}>
          Status
        </Button>
      </WrapItem>
    </Wrap>

  <WrapItem>
        <Button as="a" href="https://github.com/chiyadev/chiya.dev" variant="ghost" size="sm" leftIcon={<IoCodeSlash />}>
          Source Code
        </Button>
      </WrapItem>

</Wrap>
  );
};

export default memo(Links);
