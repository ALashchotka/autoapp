import { useEffect, useState } from "react";

import { Keyboard } from "react-native";

export function useLink() {
  const [link, setLink] = useState("");

  const onLinkChange = (value: string) => {
    if (value.includes("autoplius") && value.includes("html")) {
      if (value.includes("m.autoplius.lt")) {
        setLink(value);
      } else {
        setLink(value.split("autoplius.lt").join("m.autoplius.lt"));
      }
    } else {
      setLink("");
    }
  };

  useEffect(() => {
    if (link) {
      Keyboard.dismiss();
    }
  }, [link]);

  return {
    link,
    onLinkChange,
  };
}
