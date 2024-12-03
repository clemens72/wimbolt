"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import Link from "next/link";
import { submit } from "@/actions/submit";


export default function NewPost() {
    const [error, setError] = useState<string>();
    const router = useRouter();
    const ref = useRef<HTMLFormElement>(null);

    const handleSubmit = async (formData: FormData) => {
        const s = await submit({
            title: formData.get("title"),
            body: formData.get("body"),
            url: formData.get("url")
        });
        ref.current?.reset();
        // if (s?.error) {
        //     setError(s.error);
        //     return;
        // } else {
            return router.push("/login");
        // }
    };

    return (
        <section className="w-full h-screen flex items-baseline justify-center">
            <form ref={ref}
                action={handleSubmit}
                className="p-6 w-full max-w-2xl flex flex-col justify-between items-center gap-2 
                border border-solid border-black bg-white rounded">
                {error && <div className="">{error}</div>}
                <h1 className="mb-5 w-full text-2xl font-bold">Log Entry</h1>
                <p><b>NOTE:</b> This is only a demo. Any information you enter will not be retained through major updates.</p>
                <p className="mb-3 w-full text-right font-light">-Clemens</p>
                <label className="w-full text-sm">Title</label>
                <input
                    type="text"
                    placeholder="Title"
                    className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded text-[13px]"
                    name="title"
                />

                <label className="w-full text-sm">Entry</label>
                <input
                    type="text"
                    placeholder="Write your entry here..."
                    className="w-full h-32 border  border-solid border-black py-1 px-2.5 rounded"
                    name="body"
                />

                <label className="w-full text-sm">Sample</label>
                <div className="flex w-full">
                    <input
                        type="text"
                        placeholder="Enter audio URL Here"
                        className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded"
                        name="url"
                    />
                </div>

                <Button className="w-full border border-solid border-black py-1.5 mt-2.5 rounded
                transition duration-150 ease hover:bg-black">
                    Submit
                </Button>


                <Link href="/login" className="text-sm text-[#888] transition duration-150 ease hover:text-black">
                    Need help?
                </Link>
            </form>
        </section>
    );
};