import { WorkExperienceContent, WorkExperiencePageProps } from './WorkExperienceContent.tsx'

export function JuYingTongContent(props: WorkExperiencePageProps) {
    return (
        <WorkExperienceContent title="Ju Ying Tong (Technology Startup)" {...props}>
            <ul>
                <li>
                    Designed and developed a backend architecture, ensuring the seamless functioning
                    of the application.
                </li>
                <li>
                    Implemented various API interfaces, encompassing user management operations such
                    as verification, modification, creation, deletion, and content preservation for
                    conferences.
                </li>
                <li>
                    Facilitated payment processing through WeChat for conferences requiring
                    registration fees, enabling users to conveniently complete the registration
                    process.
                </li>
            </ul>
        </WorkExperienceContent>
    )
}
