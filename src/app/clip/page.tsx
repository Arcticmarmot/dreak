import React from "react";
import Link from "next/link";
import {GenerateClipGroups} from "../../constants/func";
import {MetadataGroup} from "../../constants/interfaces";

function Group({ group } : { group: MetadataGroup }) {
    return (
        <div className="w-full mt-10 mb-10">
            <p className="text-3xl font-bold">{group.name}</p>
            <div className="">
                {group.list.map((item, i) => {
                    return (
                        <div className="mt-5" key={i}>
                            <Link href={"/clip/" + item.filename} key={i} className="flex justify-between items-center px-10">
                                <p className="text-xl pr-5">{item.title}</p>
                                <div className="h-0.5 flex-1 border-b border-dashed border-spacing-0.5 border-dark-background dark:border-background"></div>
                                <p className="text-xl pl-5">{item.createTime}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default function Page() {
    const groups = GenerateClipGroups();
    return (
        <div className="max-w-main-width w-main-width h-main-height pt-10">
            <p className="text-4xl font-bold flex justify-center">Step</p>
            {groups.map((group, i) => {
                return (
                    <Group group={group} key={i}></Group>
                )
            })}
        </div>
    );
}
