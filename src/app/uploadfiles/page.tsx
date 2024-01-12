import * as UploadFiles from "@/components/UploadFiles";
import * as FileInfo from "@/components/FileInfo";

import { IoMdAdd } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { File } from "buffer";

export default function Hello() {
  return (
    <main className="mt-10 flex justify-center items-center">
      <section className="w-[50%]">
        <header className="border-solid shadow-md rounded-lg border-2 w-full p-10">
          <UploadFiles.Root>
            <section className="shadow-md flex flex-initial items-center justify-center border-solid border-2 w-[12rem]  h-[10.5rem] rounded-md">
              <UploadFiles.Input>
                <span className="text-6xl block text-slate-300 hover:scale-125 transition-transform duration-300">
                  <IoMdAdd />
                </span>
              </UploadFiles.Input>

              <UploadFiles.PreviewContainer>
                <UploadFiles.PreviewContent />

                <UploadFiles.Actions>
                  <UploadFiles.RemoveButton>
                    <FaRegTrashAlt />
                  </UploadFiles.RemoveButton>
                  <UploadFiles.ExpandButton>
                    <IoSearchOutline />
                  </UploadFiles.ExpandButton>
                </UploadFiles.Actions>

                <UploadFiles.SaveButton>
                  Salvar
                </UploadFiles.SaveButton>
              </UploadFiles.PreviewContainer>
            </section>

            <section className=" justify-between p-2 first-line:border-solid border-2 w-[65%] flex-1 flex flex-col">
              <FileInfo.Header />
              <FileInfo.ProgressBarContainer>
                <FileInfo.ProgressBar />
                <FileInfo.Percentage/>
              </FileInfo.ProgressBarContainer>
            </section>
          </UploadFiles.Root>

        </header>
      </section>
    </main>
  );
}
