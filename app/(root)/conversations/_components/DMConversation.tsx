import { Id } from "@/convex/_generated/dataModel";
import React from "react";

type Props = {
  id: Id<"conversations">;
  imageUrl: string;
  username: string;
};

const DMConversation = ({ id, imageUrl, username }: Props) => {
  return <div>DMConversation</div>;
};

export default DMConversation;
