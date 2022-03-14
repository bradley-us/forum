import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

import './styles.css'

import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

import avatar4 from '../../../../assets/avatars/avatar4.jpg'

const LeftSideInputComponent = ({likesCounter} : {likesCounter: number}) => {
  return (
    <div className='px-4'>
      <div
      className='flex flex-col items-center justify-center px-4 py-2 text-sm rounded-xl bg-emerald-100 text-emerald-500'
    >
      <ThumbUpIcon sx={{fontSize: 20}} /> <span>{likesCounter}</span>
    </div>
    </div>
    
  )
}

interface CentralInputComponentProps {isPinnedBySuperUsers: boolean, questionText: string, publishedBy: string, noOfDays: number}

const CentralInputComponent = ({isPinnedBySuperUsers, questionText, publishedBy, noOfDays} : CentralInputComponentProps) => {
  return (
    <div className='p-2'>
        {
          isPinnedBySuperUsers ?
          (
            <div className='flex flex-row items-center justify-start text-sm'>
              <PushPinOutlinedIcon className='text-emerald-500' sx={{fontSize: 13}} /> <span className='text-[10px] ml-1 font-semibold text-slate-400 uppercase'>fijado por moderadores</span>
            </div>
          )
          :
          null
        }
      
      <div className='flex flex-col gap-1 mt-1'>
        <h4 className='text-[13px] font-bold'>
          {questionText}
        </h4>
        <p className='text-xs text-slate-400'>Publicado por <span className='font-bold'>{publishedBy}</span> hace <span>{noOfDays}</span> días</p>
      </div>
    </div>
  )
}

const RightSideInputComponent = ({avatarsGroup, noOfAnswers} : {avatarsGroup?: any, noOfAnswers?: any}) => {
  return (
    <div className='flex flex-col justify-center gap-4 px-5 sm:flex-row py-7'>
      <div className='flex flex-row'>
        <AvatarGroup>
          {
            avatarsGroup.map((avatar, key) => (
                <Avatar
                  key={key}
                  alt="Remy Sharp"
                  src={avatar.linkImg}
                  sx={{ width: 24, height: 24 }}
                />
            ))
          }
        </AvatarGroup>
      </div>
      
      <div className='flex flex-row items-center justify-center py-1 text-sm text-slate-400'>
        <ModeCommentOutlinedIcon sx={{fontSize: 16}} /> <span className='ml-1'>{noOfAnswers}</span>
      </div>
    </div>
  )
}

interface DiscussionInputsProps {isPinnedBySuperUsers: boolean, likesCounter: number, questionText: string, publishedBy: string, noOfDays: number, avatarsGroup?: any, noOfAnswers: number}

const DiscussionInputs = (
  {isPinnedBySuperUsers, likesCounter, questionText, publishedBy, noOfDays, avatarsGroup, noOfAnswers}
  :
  DiscussionInputsProps
  ) => {
  return (
    <div className='discussions__inputs dark:!border-slate-700'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row items-center justify-start w-full py-1'>
          <LeftSideInputComponent likesCounter={likesCounter} />
          
          <CentralInputComponent
            isPinnedBySuperUsers={isPinnedBySuperUsers}
            questionText={questionText}
            noOfDays={noOfDays}
            publishedBy={publishedBy}
          />
        </div>
        <div>
          <RightSideInputComponent avatarsGroup={avatarsGroup} noOfAnswers={noOfAnswers} />
        </div>
      </div>
    </div>
  )
}

export default DiscussionInputs