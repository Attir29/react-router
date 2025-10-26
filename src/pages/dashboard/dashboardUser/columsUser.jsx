import { Trash2, Info, Pencil } from "lucide-react";
import { deleteUser } from "@/utils/api/users";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const columns = [
  {
    header: "No",
    accessorFn: (originalRow, index) => index + 1,
  },
  {
    accessorKey: "fullname",
    header: "Nama Lengkap",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone_number",
    header: "Nomor Telepon",
  },
  {
    accessorKey: "age",
    header: "Umur",
  },
  {
    accessorKey: "address",
    header: "Alamat",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    header: "Aksi",
    cell: ({ row }) => {
      const id = row.original.id;

      // Handler delete user
      const handleDeleteUser = async () => {
        try {
          await deleteUser(id);
          alert("Data user berhasil dihapus!");
          // Refresh data (lebih baik trigger re-fetch daripada reload seluruh halaman)
          window.location.reload();
        } catch (error) {
          console.error("Gagal menghapus data user:", error);
          alert("Gagal menghapus data user. Silakan coba lagi.");
        }
      };

      return (
        <div className="flex items-center gap-2">
          {/* Button Info */}
          <button
            onClick={() => console.log("Ini Button Info")}
            className="p-1 hover:text-blue-600 transition"
          >
            <Info size={20} />
          </button>

          {/* Button Edit */}
          <button
            onClick={() => console.log("Ini Button Edit")}
            className="p-1 hover:text-green-600 transition"
          >
            <Pencil size={20} />
          </button>

          {/* Button Delete */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="p-1 hover:text-red-600 transition">
                <Trash2 size={20} />
              </button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Apakah Anda yakin ingin menghapus data ini?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Data yang dihapus tidak dapat dikembalikan.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Batal</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteUser}>
                  Hapus
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
