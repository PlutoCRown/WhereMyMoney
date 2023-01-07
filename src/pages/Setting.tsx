import { Button, Chip, Divider, Stack } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import DownloadIcon from "@mui/icons-material/Download";
import EditTaker from "@/Components/Setting/EditTaker";
import EditPurpose from "@/Components/Setting/EditPurpose";
const Setting = () => {
  return (
    <div>
      <Stack spacing={2} divider={<Divider orientation="vertical" flexItem />}>
        <EditTaker />
        <EditPurpose />
        <h2>导入/导出账单</h2>
        <Stack direction="row" spacing={1}>
          <Button startIcon={<UploadIcon />}>导入</Button>
          <Button startIcon={<DownloadIcon />}>导出</Button>
        </Stack>
        <h2>其他设置</h2>
      </Stack>
    </div>
  );
};

export default Setting;
