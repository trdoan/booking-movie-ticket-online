import { clientServices } from ".";

export const movieServices = {
  getAllMovie() {
    return clientServices.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
};
