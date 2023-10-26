import Box from "@mui/material/Box";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import TableCollapseArrow from "@/public/icons/table_collapse_arrow";
import sm_avatar from "@/public/avatars/sample.png";
import RecommendLogo from "@/public/icons/recommend_logo";
import EventItem from "../EventItem";
import { Backdrop, Fade } from "@mui/material";

type UpcomingEventsModalProps = {
  open: boolean;
  handleClose: () => void; // Assuming handleClose is a function with no parameters and no return value
  eventItems: {
    date: Date;
    name: string;
    content: string;
    period: string;
    guest: number[];
  }[];
};

export default function UpcomingEventsModal({
  open,
  handleClose,
  eventItems,
}: UpcomingEventsModalProps) {
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
            width: 513,
            height: 690,
            bgcolor: "background.paper",
            // border: "2px solid #000",
            boxShadow: 24,
          }}
        >
          <div className="w-full h-full flex flex-col justify-between font-arial overflow-auto">
            <div className="mt-[17px] ml-[17px] font-bold text-[23px] text-textdarkColor">
              Upcoming Events
            </div>
            <div className="mt-[19px] mb-[30px] mx-2 flex flex-col gap-4 cursor-pointer">
              {eventItems.map((item, index) => {
                return (
                  <EventItem
                    item={item}
                    index={index}
                    key={`event_preview_item_modal_${index}`}
                  />
                );
              })}
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
