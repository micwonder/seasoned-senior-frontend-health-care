"use client";

import { lazy, Suspense, useState } from "react";
import ClientDashboardLayout from "@/components/dashboard/ClientDashboardLayout";
import { Collapse } from "@mui/material";

// Lazy load the components
const ActiveTimesheets = lazy(
  () => import("@/components/dashboard/ActiveTimesheets")
);
const AppointmentCard = lazy(
  () => import("@/components/dashboard/AppointmentCard")
);
const CalendarCollapse = lazy(
  () => import("@/components/dashboard/CalendarCollapse")
);
const CaregiversTableCard = lazy(
  () => import("@/components/dashboard/CaregiversTableCard")
);
const MessagePreview = lazy(
  () => import("@/components/dashboard/MessagePreview")
);
const MoneySpentCard = lazy(
  () => import("@/components/dashboard/MoneySpentCard")
);
const UpcomingEventsPreview = lazy(
  () => import("@/components/dashboard/UpcomingEventsPreview")
);
const UpcomingInterviews = lazy(
  () => import("@/components/dashboard/UpcomingInterviews")
);
const UpcomingVisitsCard = lazy(
  () => import("@/components/dashboard/UpcomingVisitsCard")
);

const ClientDashboard = () => {
  const [calendarChecked, setCalendarChecked] = useState<boolean>(true);
  const handleSetChecked = () => setCalendarChecked(!calendarChecked);

  return (
    <>
      <ClientDashboardLayout selected="Dashboard">
        <div className="flex flex-row m-3">
          <div
            className="bg-white rounded-2xl absolute right-[8px] 3xl:right-[67px] 4xl:right-[67px]"
            style={{ border: "0.882px solid #D2D2D2", zIndex: 50 }}
          >
            <Collapse in={calendarChecked} collapsedSize={70}>
              <CalendarCollapse handleSetChecked={handleSetChecked} />
              <Suspense fallback={<div>Loading...</div>}>
                <UpcomingVisitsCard />
              </Suspense>
            </Collapse>
          </div>
          <div
            className="flex gap-[15px] flex-col items-start"
            style={{ flex: 1 }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <AppointmentCard />
              <MoneySpentCard />
              <CaregiversTableCard />
              <ActiveTimesheets />
              <MessagePreview />
              <div className="flex flex-row gap-[18px]">
                <UpcomingInterviews />
                <UpcomingEventsPreview />
              </div>
            </Suspense>
          </div>
        </div>
      </ClientDashboardLayout>
    </>
  );
};

export default ClientDashboard;
