import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useColorScheme } from '@mui/material/styles'
import Box from '@mui/system/Box'
import { Mode } from '@mui/system/cssVars/useCurrentColorScheme'

export const ThemeSelect = () => {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event: SelectChangeEvent) => {
    setMode(event.target.value as Mode)
  }

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel
        id="label-select-theme-mode"
        sx={{
          color: 'text.primary',
          '&.Mui-focused': { color: 'text.primary' }
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-select-theme-mode"
        id="select-theme-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          display: 'flex',
          color: 'text.primary',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'text.primary'
          },
          '& .MuiSvgIcon-root': { color: 'text.primary' },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'text.primary'
          },
          '&.Mui-focused fieldset': { borderColor: 'text.primary' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'text.primary'
          }
        }}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize="small" />
            Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
