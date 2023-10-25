import Image from "next/image";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import DashboardIcon from "@/public/icons/sidebar/dashboard_icon";
import RecommendationsIcon from "@/public/icons/sidebar/recommendations_icon";
import CarePlanIcon from "@/public/icons/sidebar/care_plan_icon";
import PaymentIcon from "@/public/icons/sidebar/payment_icon";
import EventsIcon from "@/public/icons/sidebar/events_icon";
import MessagesIcon from "@/public/icons/sidebar/messages_icon";
import TimesheetIcon from "@/public/icons/sidebar/timesheet_icon";
import ReportsIcon from "@/public/icons/sidebar/reports_icon";
import ServicesIcon from "@/public/icons/sidebar/services_icon";
import ContractIcon from "@/public/icons/sidebar/contract_icon";
import CaregiverManagementIcon from "@/public/icons/sidebar/caregiver_management_icon";
import ApplicationIcon from "@/public/icons/sidebar/application_icon";
import HelpIcon from "@/public/icons/sidebar/help_icon";
import SettingsIcon from "@/public/icons/sidebar/settings_icon";

const itemIcons = [
  DashboardIcon,
  RecommendationsIcon,
  CarePlanIcon,
  PaymentIcon,
  EventsIcon,
  MessagesIcon,
  TimesheetIcon,
  ReportsIcon,
  ServicesIcon,
  ContractIcon,
  CaregiverManagementIcon,
  ApplicationIcon,
  HelpIcon,
  SettingsIcon,
];

const itemNames = [
  "Dashboard",
  "Recommendations",
  "Care Plan",
  "Payment",
  "Events",
  "Messages",
  "Timesheet",
  "Reports",
  "Services",
  "Contract",
  "Caregiver Management",
  "Application",
  "Help",
  "Settings",
];

const combinedList = itemNames.map((text, index) => ({
  iconUrl: itemIcons[index],
  itemName: text,
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#CB5A6F",
      dark: "#CB5A6F",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

const ClientDashboardSideBar = ({ selected }: { selected: string }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="bg-white pt-[22px] pb-[64px] sm:hidden md:hidden w-[300px] flex flex-col">
          {combinedList.map((item, index) => (
            <ListItem
              className="px-3"
              key={`sidebar_list_item_${index}`}
              disablePadding
            >
              <ListItemButton selected={item.itemName === selected}>
                <div className="m-2">
                  <item.iconUrl
                    color={
                      item.itemName === selected
                        ? theme.palette.primary.main
                        : "#282828"
                    }
                  />
                </div>
                <ListItemText
                  primary={item.itemName}
                  style={{
                    color:
                      item.itemName === selected
                        ? theme.palette.primary.main
                        : "#282828",
                  }}
                />
                <div className="m-2 w-[24px] h-[24px]"></div>
              </ListItemButton>
            </ListItem>
          ))}
        </div>
      </ThemeProvider>
    </>
  );
};

export default ClientDashboardSideBar;
