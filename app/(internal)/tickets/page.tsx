import TicketView from "@/components/Tickets/TicketView";
import TicketViewSkeleton from "@/components/Tickets/TicketViewSkeleton";
import { getTicketResources } from "@/lib/actions/ticket.action";
import { getLoggedInUser } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";
import React from "react";

const Tickets = async ({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) => {
  const loggedInUser = await getLoggedInUser();
  const resources = await getTicketResources();

  if (!searchParams || Object.keys(searchParams).length === 0) {
    const resourceId = resources.find((resource) => resource.email === loggedInUser?.email)?.id;

    if (resourceId) {
      redirect(`/tickets?completed=false&assignedResourceID=${resourceId}`);
    }
  }

  return (
    <div className="flex size-full justify-between space-x-2">
      <div className="flex flex-col w-full h-full p-sm">
        <React.Suspense fallback={<TicketViewSkeleton />}>
          <TicketView searchParams={searchParams} />
        </React.Suspense>
      </div>
    </div>
  )
}

export default Tickets;