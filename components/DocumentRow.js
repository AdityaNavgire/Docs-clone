import { IconButton } from "@material-tailwind/react";
import { MdArticle } from "react-icons/md";
import { useRouter } from "next/router";
import { db } from "../firebase.config";
import {
  doc,
  setDoc,
  getDocs,
  onSnapshot,
  collection,
} from "firebase/firestore";
import { BsThreeDotsVertical, BsFillFolderSymlinkFill } from "react-icons/bs";

import { useEffect, useState } from "react";

function DocumentRow({ input }) {
  const label = input;
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/doc/${label}`)}
      className="flex items-center max-w-3xl mx-auto p-4 rounded-lg hover:bg-grey-100 cursor-pointer"
    >
      <MdArticle color="blue" />
      <p className="flex-grow pl-5 w-10 mx-auto pr-10 truncate">
        {label ? label : "New Doc"}
      </p>
      {/* {console.log(input, "DR")} */}

      <IconButton size="lg" variant="text" className="bottom-0 ">
        <BsThreeDotsVertical color="grey" />
      </IconButton>
    </div>
  );
}

export default DocumentRow;
