import Box from "@mui/material/Box";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import TableCollapseArrow from "@/public/icons/table_collapse_arrow";
import sm_avatar from "@/public/avatars/sample.png";
import RecommendLogo from "@/public/icons/recommend_logo";
import { Backdrop, Fade } from "@mui/material";

type CaregiversTableModalProps = {
  open: boolean;
  handleClose: () => void; // Assuming handleClose is a function with no parameters and no return value
  pastCaregiversItems: {
    name: string;
    hourlyCharge: string;
    totalHourSpent: string;
    totalPaid: string;
  }[];
};

export default function CaregiversTableModal({
  open,
  handleClose,
  pastCaregiversItems,
}: CaregiversTableModalProps) {
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.backgroundColor = "#FFF2F588";
    event.currentTarget.style.paddingLeft = "2px";
  };

  const handleMouseLeave = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    event.currentTarget.style.backgroundColor = index % 2 ? "" : "#FAFAFB";
    event.currentTarget.style.paddingLeft = "0px";
  };

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
            width: 933,
            height: 727,
            bgcolor: "background.paper",
            // border: "2px solid #000",
            boxShadow: 24,
          }}
        >
          <div className="w-full h-full flex flex-col my-[18px] justify-between font-arial overflow-auto">
            <div className="mt-[17px] ml-[17px] font-bold text-[23px] text-textdarkColor">
              Past Caregivers
            </div>
            <div className="flex flex-col items-center">
              <div className="text-textdarkColor text-[17px] text-center w-[858px]">
                <div className="flex flex-row h-[68px]">
                  <div className="w-[10%] flex flex-row items-center justify-center">
                    <div className="mr-2">SN</div>
                    <TableCollapseArrow />
                  </div>
                  <div className="w-[30%] flex flex-row items-center">
                    <div className="ml-[15%] flex flex-row flex-start items-center">
                      <div className="mr-2">Name</div>
                      <TableCollapseArrow />
                    </div>
                  </div>
                  <div className="w-[20%] flex flex-row items-center justify-center">
                    <div className="mr-2">Hourly charge</div>
                    <TableCollapseArrow />
                  </div>
                  <div className="w-[20%] flex flex-row items-center justify-center">
                    <div className="mr-2">Total hour spent</div>
                    <TableCollapseArrow />
                  </div>
                  <div className="w-[20%] flex flex-row items-center justify-center">
                    <div className="mr-2">Total paid</div>
                    <TableCollapseArrow />
                  </div>
                </div>
                <div className="flex flex-col cursor-pointer mb-[10px]">
                  {pastCaregiversItems.map((item, index) => {
                    return (
                      <div
                        className="flex flex-row h-[68px] items-center rounded-md"
                        style={{
                          backgroundColor: `${index % 2 ? "" : "#FAFAFB"}`,
                        }}
                        key={`caregiver_item_modal_${index}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={(event) => handleMouseLeave(event, index)}
                      >
                        <div className="w-[10%] flex flex-row justify-center">
                          {index < 3 ? <RecommendLogo /> : index + 1}
                        </div>
                        <div className="w-[30%]">
                          <div className="text-forgotColor ml-[10%] flex flex-row items-center items-start">
                            <Image
                              alt={item.name}
                              src={sm_avatar}
                              width={47}
                              className="rounded-[50%] mr-[5px]"
                              style={{ height: "auto" }}
                              priority={false}
                            />
                            <div className="ml-2">{item.name}</div>
                          </div>
                        </div>
                        <div className="w-[20%]">{item.hourlyCharge}</div>
                        <div className="w-[20%]">{item.totalHourSpent}</div>
                        <div className="text-[#30A64A] w-[20%] font-bold">
                          {item.totalPaid}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
