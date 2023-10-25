import supabase from "@/utils/supabase";
import { CodeofconductAd } from "@/types/codeofconduct_ad";
import { PrimaryButton } from "@/components/PrimaryButton";
import Image from "next/image";

const getParagraphs = async (): Promise<Array<CodeofconductAd>> => {
  const { data, error } = await supabase
    .from("codeofconduct_ads")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    console.log(error);
    return [
      {
        id: null,
        title: null,
        description: null,
      },
    ];
  }
  return data.map((item) => {
    return {
      id: item["id"],
      title: item["title"],
      description: item["description"],
    };
  });
};

const Codeofconduct = async () => {
  try {
    let cnt = 0;
    const codeofconductAds: Array<CodeofconductAd> = await getParagraphs();

    return (
      <>
        <p className="text-center text-bannerTextColor text-adTitleBigSize md:text-adTitleSmallSize sm:text-adTitleSmallSize font-arial font-bold">
          Code of Conduct for
          <br />
          Seasoned Senior Home Care Agency
        </p>
        <div className="border border-solid border-[#D9D9D9] mt-[90px] lg:mt-[50px] md:mt-[50px] sm:mt-[50px] mx-[5px]" />
        <div className="mt-[25px]">
          <Image
            alt="codeofconduct"
            src="/images/codeofconduct.png"
            className="w-full mt-[50px]"
            width="1015"
            height="500"
          />
          <div>
            {codeofconductAds.map((codeofconductAd, idx) => {
              let prefix: string = "",
                isFirst: boolean = true;
              if (
                (idx > 0 &&
                  codeofconductAds[idx - 1].title?.trim() ==
                    codeofconductAd.title?.trim()) ||
                (cnt == 0 &&
                  idx < codeofconductAds.length - 1 &&
                  codeofconductAds[idx + 1].title == codeofconductAd.title)
              ) {
                if (cnt != 0) {
                  isFirst = false;
                }
                prefix = String.fromCharCode(cnt + 97) + ". ";
                cnt++;
              } else {
                cnt = 0;
                if (
                  idx < codeofconductAds.length - 1 &&
                  codeofconductAds[idx + 1].title?.trim() ==
                    codeofconductAd.title?.trim()
                ) {
                  isFirst = true;
                  prefix = String.fromCharCode(cnt + 97) + ". ";
                  cnt++;
                }
              }

              return (
                <div
                  key={`codeofconduct_paragraph_${idx}`}
                  className={`${isFirst ? "mt-[50px]" : ""} text-justify`}
                >
                  {isFirst && (
                    <span className="text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-bold">
                      {`${codeofconductAd.title}: `}
                      <br />
                    </span>
                  )}
                  <br />
                  <span className="text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-bold">
                    {prefix}
                  </span>
                  <span className="text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light">
                    {codeofconductAd.description}
                  </span>
                </div>
              );
            })}
            <div className="mt-[50px] text-justify">
              <span className="text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light">
                Adherence to this Code of Conduct is a condition of employment
                and engagement with Seasoned Senior Home Care Agency. Violations
                may result in disciplinary action, up to and including
                termination or legal consequences. By acknowledging this Code,
                we commit to upholding its principles and fostering a culture of
                excellence, compassion, and integrity in all our interactions
                and work.
              </span>
            </div>
          </div>
          <div className="text-center mt-[50px]">
            <PrimaryButton href="/Registration/1">apply for care</PrimaryButton>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default Codeofconduct;
