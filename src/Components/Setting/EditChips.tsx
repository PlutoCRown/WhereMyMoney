import { Button, Dialog, DialogTitle } from "@mui/material";
import { useState } from "react";
import Chips from "./Chips";
type I = { id: string; name: string };
const EditChips: React.FC<{
  data: I[];
  Add: (callback: any) => void;
  rename: (id: string, name: string) => void;
  del: (id: string) => void;
  title: string;
  color?:
    | "default"
    | "error"
    | "info"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
}> = ({ data, Add, rename, del, title, color }) => {
  const [open, setOpen] = useState(false);
  const [opening, setOpening] = useState<I | null>(null);
  const [cur, setCur] = useState<I | null>(null);

  const OpenDialog = (item: any) => {
    if (cur != item) {
      setOpening(item);
      setOpen(true);
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <Chips
        List={data}
        Add={() => cur == null && Add(setCur)}
        rename={(id, val) => (rename(id, val), setCur(null))}
        color={color}
        open={OpenDialog}
        renameing={cur}
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        {opening ? (
          <>
            <DialogTitle>{`${opening.name}相关的数据`}</DialogTitle>
            <Button
              fullWidth
              onClick={() => (
                del(opening.id), setOpen(false), setOpening(null)
              )}
              variant="contained"
            >
              删掉他！
            </Button>
          </>
        ) : (
          <></>
        )}
      </Dialog>
    </div>
  );
};

export default EditChips;
