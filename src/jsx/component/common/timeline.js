import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Img } from '../../../constant';
import { ArrowForward, ArrowRight, ChatBubble, Remove, SyncAlt } from '@mui/icons-material';


export const ActivityTimeline = () => {
    return (
        <div className="flex flex-col w-full">
            <div className='flex p-4'><span className="pt-1 text-xl font-semibold"> Recent Activity </span> </div>
            <hr className="h-px bg-gray-200 border-0" />
            <div className='flex flex-col '>
                <span className="bg-[#F8FAFC] text-[#94A3B8] font-semibold  p-2 mx-4 mt-2">
                    TODAY
                </span>
                <Timeline sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{ bgcolor: "#6366F1" }}><ChatBubble /></TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='flex justify-between pt-2'>
                                <span>
                                    Nick Mark mentioned Sara Smith in a new post
                                </span>
                                <span className='text-[#6366F1]'>
                                    View <ArrowForward />
                                </span>
                            </div>

                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{ bgcolor: "#F43F5E" }} ><Remove /></TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent><div className='flex justify-between pt-2'>
                            <span>
                                The post Post Name was removed by Nick Mark
                            </span>
                            <span className='text-[#6366F1]'>
                                View <ArrowForward />
                            </span>
                        </div></TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{ bgcolor: "#10B981" }}><SyncAlt /></TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent><div className='flex justify-between pt-2'>
                            <span>
                                Patrick Sullivan published a new post
                            </span>
                            <span className='text-[#6366F1]'>
                                View <ArrowForward />
                            </span>
                        </div></TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
            <div className='flex flex-col '>
                <span className="bg-[#F8FAFC] text-[#94A3B8] font-semibold p-2 mx-4 mt-2">
                    YESTERDAY
                </span>
                <Timeline sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{ bgcolor: "#0EA5E9" }}><SyncAlt /></TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent><div className='flex justify-between pt-2'>
                            <span>
                                240+ users have subscribed to Newsletter #1
                            </span>
                            <span className='text-[#6366F1]'>
                                View <ArrowForward />
                            </span>
                        </div></TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{ bgcolor: "#6366F1" }}><ChatBubble /></TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent><div className='flex justify-between pt-2'>
                            <span>
                                The post Post Name was suspended by Nick Mark
                            </span>
                            <span className='text-[#6366F1]'>
                                View <ArrowForward />
                            </span>
                        </div></TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    );
}