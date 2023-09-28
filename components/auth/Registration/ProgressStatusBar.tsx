"use client";

const ProgressStatusBar = ({
  hasBack,
  completeness,
}: {
  completeness: number;
  hasBack: boolean;
}) => {
  return (
    <div className={`${hasBack ? "ml-[135px]" : "ml-0"}`}>
      <div className="mt-[146px] ml-8 flex justify-between max-w-[436px]">
        {Array.from(Array(11)).map((value, idx) => {
          return (
            <div
              key={"progress_" + idx}
              className={`w-full mx-1  h-[6px] rounded-lg ${
                idx == completeness-1
                  ? "bg-primaryDisabled"
                  : idx < completeness-1
                  ? "bg-primary"
                  : "bg-borderGreyColor"
              }`}
            ></div>
          );
        })}
      </div>
      <div className="ml-8  mt-2">{completeness} of 11</div>
    </div>
  );
};

ProgressStatusBar.displayName = "ProgressStatusBar";

export default ProgressStatusBar;
