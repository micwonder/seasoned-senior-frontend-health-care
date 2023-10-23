"use client";

import ActiveTimesheets from "@/components/dashboard/ActiveTimesheets";
import AppointmentCard from "@/components/dashboard/AppointmentCard";
import CalendarCollapse from "@/components/dashboard/CalendarCollapse";
import CaregiversTableCard from "@/components/dashboard/CaregiversTableCard";
import ClientDashboardLayout from "@/components/dashboard/ClientDashboardLayout";
import MessagePreview from "@/components/dashboard/MessagePreview";
import MoneySpentCard from "@/components/dashboard/MoneySpentCard";
import UpcomingInterviewsEvents from "@/components/dashboard/UpcomingInterviewsEvents";
import UpcomingVisitsCard from "@/components/dashboard/UpcomingVisitsCard";
import { Collapse } from "@mui/material";
import { useState } from "react";

const ClientDashboard = () => {
  const [calendarChecked, setCalendarChecked] = useState<boolean>(true);

  const handleSetChecked = () => setCalendarChecked(!calendarChecked);

  return (
    <>
      <ClientDashboardLayout selected="Dashboard">
        <div className="flex flex-row mx-2 ">
          <div
            className="bg-white rounded-2xl absolute right-[8px] 3xl:right-[67px]"
            style={{ border: "0.882px solid #D2D2D2", zIndex: 50 }}
          >
            <Collapse in={calendarChecked} collapsedSize={70}>
              <CalendarCollapse handleSetChecked={handleSetChecked} />
              <UpcomingVisitsCard />
            </Collapse>
          </div>
          <div
            className="flex gap-[15px] flex-col items-start"
            style={{ flex: 1 }}
          >
            <AppointmentCard />
            <MoneySpentCard />
            <CaregiversTableCard />
            <ActiveTimesheets />
            <MessagePreview />
            <UpcomingInterviewsEvents />
          </div>
        </div>
      </ClientDashboardLayout>
    </>
  );
};

export default ClientDashboard;
