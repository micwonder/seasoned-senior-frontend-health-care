import Box from "@mui/material/Box";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import avatar from "@/public/avatars/sample.png";
import { Backdrop, Button, Fade } from "@mui/material";
import DashboardPrimaryBtn from "../DashboardPrimaryBtn";
import TimePickerCom from "@/components/auth/Registration/TimePickerCom";
import DatePickerCom from "@/components/auth/Registration/DatePickerCom";

type AppointmentRescheduleModalProps = {
  open: boolean;
  handleClose: () => void; // Assuming handleClose is a function with no parameters and no return value
};

export default function AppointmentRescheduleModal({
  open,
  handleClose,
}: AppointmentRescheduleModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 700,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            borderRadius: "6px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            height: 400,
            bgcolor: "background.paper",
            // border: "2px solid #000",
            boxShadow: 24,
          }}
        >
          <div className="w-full h-full flex flex-col my-[18px] justify-between font-arial items-center">
            <div className="font-bold text-[24px] text-textdarkColor">
              Re-schedule meeting with Frank Sergio
            </div>
            <div className="flex flex-row justify-between w-[616px]">
              <Image
                alt="caregiver avatar"
                src={avatar}
                width={80}
                style={{
                  height: "auto",
                  border: "0.5px solid rgba(255, 114, 140, 0.99)",
                }}
                className="rounded-md"
              />
              <div className="flex flex-col text-[18px]">
                <div className="font-bold">Available Time slot</div>
                <div>Mon - Fri</div>
                <div>10 AM - 07 PM</div>
              </div>
            </div>
            <div className="flex flex-row gap-[24px]">
              <div className="flex flex-col w-[300px]">
                <div className="text-[16px] font-bold">Select Time</div>
                <TimePickerCom title="" />
                {/* <Button
                style={{ border: "0.5px solid #3D3D3D" }}
                className="rounded-md h-[48px]"
              >
                Choose Time
              </Button> */}
              </div>
              <div className="flex flex-col w-[300px]">
                <div className="text-[16px] font-bold">Select Day</div>
                <DatePickerCom title="" />
              </div>
            </div>
            <div className="w-[300px] flex flex-col">
              <DashboardPrimaryBtn
                btnValue="Save changes"
                onClicked={handleClose}
              />
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
