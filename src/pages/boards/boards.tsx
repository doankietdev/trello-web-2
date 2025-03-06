import Box from '@mui/material/Box'
import { BoardsBar } from "./components"
import { CustomTheme } from '~/theme'

const Boards = () => {
  return (
    <>
      <BoardsBar />

      <Box
        sx={{
          height: (theme) => {
            const {
              trello: { appBarHeight, boardBarHeight }
            } = theme as CustomTheme
            return `calc(100vh - ${appBarHeight} - ${boardBarHeight})`
          },
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Boards Content
      </Box>
    </>
  )
}

export default Boards
