import claxed from 'claxed'

const UserWrapper = claxed.div`
    max-w-xs
    text-center
`

const ProfileImage = claxed.img`
    rounded-3xl
`

const ProfileMic = claxed.div`
    absolute
    rounded-full
    bg-white
    border
    -right-0.5
    -bottom-0.5
`

const ProfileLabel = claxed.p`
    text-sm
    font-semibold
`

interface TUserRoom {
  name: string
  imagePath?: string
  muted?: boolean
}

const DEFAULT_IMAGEPATH = 'https://via.placeholder.com/200x200'

export default function UserRoom({
  name,
  imagePath = DEFAULT_IMAGEPATH,
  muted = false,
}: TUserRoom) {
  return (
    <UserWrapper>
      <div className="relative">
        <ProfileImage style={{ width: '70px', height: '70px' }} src={imagePath} />
        {muted && <ProfileMic style={{ width: '20px', height: '20px' }}>d</ProfileMic>}
      </div>
      <ProfileLabel>{name}</ProfileLabel>
    </UserWrapper>
  )
}
