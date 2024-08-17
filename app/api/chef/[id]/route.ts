import connect from "@/utils/db";
import { NextResponse } from "next/server";
 
 
import Chef from "@/model/chef";

export const PATCH = async (request: Request, { params }: { params: { id: string } }) => {
    await connect();
  
    try {
      const { id } = params; // Extract `id` from `params`
      const body = await request.json();
  
      const updatedChef = await Chef.findByIdAndUpdate(
        id,
        {
          $set: body,
        },
        { new: true } // Return the updated document
      );
  
      if (!updatedChef) {
        return new NextResponse("Chef item not found", { status: 404 });
      }
  
      return new NextResponse(
        JSON.stringify({
          message: "Chef successfully Updated",
          data: updatedChef,
        }),
        { status: 201 }
      ); 
    } catch (error: any) {
        return new NextResponse(
            JSON.stringify({
              message: "Error creating chef Chef",
              error: error.message,
            }),
            { status: 500 }
          );
    }
  };


  export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
    await connect();
  
    try {
        const { id } = params;  // Assuming you pass the ID as a URL parameter
  
      const deletedChef = await Chef.findByIdAndDelete(id);
  
      if (!deletedChef) {
        return new NextResponse("Chef item not found", { status: 404 });
      }
  
      return new NextResponse(
        JSON.stringify({
          message: "Chef successfully Updated",
        
        }),
        { status: 201 }
      ); 
    } catch (error: any) {
        return new NextResponse(
            JSON.stringify({
              message: "Error creating chef Chef",
              error: error.message,
            }),
            { status: 500 }
          );
    }
  };


  export const GET = async (request: Request,{ params }: { params: { id: string } }) => {
    await connect();
  
    try {
        const { id } = params;  // Assuming you pass the ID as a URL parameter
  
      const GetChef = await Chef.findById(id).populate('chef');
  
      if (!GetChef) {
        return new NextResponse("Chef item not found", { status: 404 });
      }
  
      return new NextResponse(
        JSON.stringify({
          message: "Chef successfully Updated",
          data: GetChef,
        }),
        { status: 201 }
      );     } catch (error: any) {
        return new NextResponse(
            JSON.stringify({
              message: "Error creating chef Chef",
              error: error.message,
            }),
            { status: 500 }
          );
    }
  };
  