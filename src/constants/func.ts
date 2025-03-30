import {MdxMetadata} from "./interfaces";
import {StepGroupNames, StepMetadataList} from "./metadata/step-metadata";

export function compareMetadata(a: MdxMetadata, b: MdxMetadata) {
    return a.createTime < b.createTime ? 1 : -1;
}

export function GenerateStepGroups() {
    const groups = []
    for (const i in StepGroupNames) {
        const groupName = StepGroupNames[i];
        groups.push({
            name: groupName,
            list: StepMetadataList.filter(item => item.category === groupName)
        });
    }
    for (const i in groups) {
        groups[i].list = groups[i].list.sort(compareMetadata);
    }
    return groups;
}