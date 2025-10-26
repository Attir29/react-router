import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormItem } from "@/components/ui/form";
import { FormLabel } from "@/components/ui/form";
import { FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormDescription } from "@/components/ui/form";
import { FormMessage } from "@/components/ui/form";
import { addUser } from "@/utils/api/users";

const addUserSchema = z.object({
  fullname: z
    .string()
    .min(8, { message: "nama lengkap harus minimal 8 karakter" }),
  username: z.string().min(5, { message: "username harus minimal 5 karakter" }),
  email: z.string().email({ message: "email tidak valid" }),
  phone_number: z
    .string()
    .min(12, { message: "nomor telepon harus minimal 12 karakter" }),
  age: z
    .string()
    .min(2, { message: "umur minimal 2 tahun" })
    .max(3, { message: "umur maksimal 3 tahun" }),
  address: z.string().min(5, { message: "alamat harus minimal 5 karakter" }),
  role: z.enum(["admin", "user"], { message: "role harus admin atau user" }),
});

function AddUser() {
  const form = useForm({
    resolver: zodResolver(addUserSchema),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      phone_number: "",
      age: "",
      address: "",
      role: "user",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    try {
      addUser(data);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <>
    <div className="w-screen flex justify-center items-center h-screen">
      <div className="w-[800px] flex flex-col justify-center items-center rounded-lg p-10 shadow-black shadow-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="••••••••" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Age</FormLabel>
                  <FormControl>
                    <Input placeholder="30" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main St" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Role</FormLabel>
                  <FormControl>
                    <Input placeholder="admin" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
      
    </>
  );
}

export default AddUser;
