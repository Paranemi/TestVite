import React from "react";
import { createComponent } from "@lit-labs/react";
import { BrzButton as BrzButtonComponent } from "@brz/brz-button";

export const BrzButton = createComponent({
  tagName: "brz-button",
  elementClass: BrzButtonComponent,
  react: React,
  events: {
    onClick: "click",
  },
});
