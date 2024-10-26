"use client"

import Calltable from "@/components/calling/Calltable";
import ContactTable from "@/components/notification/DataTable";

const Page = () => {
  return (
    <section className="w-full max-w-[1152px] p-4 lg:p-8">
      <Calltable />
    </section>
  );
};

export default Page;