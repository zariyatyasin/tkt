"use server";

const BASE_URL = process.env.NEXT_PUBLIC_BASEURL;

export const GetAllChef = async () => {
  try {
    const response = await fetch(`${BASE_URL}/chef`, {
      cache: "no-store",
    });

    const result = await response.json();

    console.log(result);

    return result;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
