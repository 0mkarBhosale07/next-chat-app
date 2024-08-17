"use client";
import ConversationFallback from "@/components/ui/shared/conversations/ConversationFallback";
import ItemList from "@/components/ui/shared/item-list/ItemList";
import React from "react";
import AddFrinedDialog from "./_components/AddFrinedDialog";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";
import Request from "./_components/Request";

type Props = {};

const FriendsPage = (props: Props) => {
  const requests = useQuery(api.requests.get);
  return (
    <>
      <ItemList title="Friends" action={<AddFrinedDialog />}>
        {requests ? (
          requests.length === 0 ? (
            <p className="w-full h-full flex items-center justify-center">
              No Friend Requests
            </p>
          ) : (
            requests.map((req) => {
              return (
                <Request
                  key={req.request._id}
                  id={req.request._id}
                  imageUrl={req.sender.imageUrl}
                  username={req.sender.username}
                  email={req.sender.email}
                />
              );
            })
          )
        ) : (
          <Loader2 className="h-8 w-8" />
        )}
      </ItemList>
      <ConversationFallback />
    </>
  );
};

export default FriendsPage;
