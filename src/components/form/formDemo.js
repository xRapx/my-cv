"use client";
import { useRef, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function FormDemo() {
  const [phone, setPhone] = useState(Number);
  const [email, setEmail] = useState("");
  const inputRef = useRef();
  //   const [isSucess, setIsSuccess] = useState(false);
  //   const [isError, setIsError] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ phone, email }),
      headers: { "Content-Type": "application/json" },
    });
    setPhone(inputRef.current.focus);
  }

  return (
    <div className="container mx-auto p-4 ">
      <div className="flex flex-col md:flex-row">
        {/* <!-- Phần thông tin tài chính --> */}
        <div className="md:w-1/2 bg-gray-100 p-4">
          <h2 className="text-lg font-semibold">
            Các khoản tài chính khi tham gia chương trình EPS
          </h2>
          <ul className="list-disc pl-5">
            <li className="pt-1">
              Phí xuất cảnh: 630USD (Khi có lịch xuất cảnh)
            </li>

            <li className="pt-1">
              Tiền ký quỹ: 100 triệu VND (Trong 7 ngày khi có hợp đồng)
            </li>
            {/* <!-- Thêm các thông tin khác tương tự --> */}
          </ul>
          {/* <!-- Phần quảng cáo và thông tin khuyến mãi --> */}
          <div className="bg-yellow-300 p-4 mt-2">
            <div className="flex justify-between items-center relative">
              <div>
                <h3 className="text-lg font-semibold">HỌC PHÍ</h3>
                <p className="text-sm">
                  Đặc biệt giảm ngay <strong>3.000.000</strong> VND dành cho các
                  bạn mới tốt nghiệp THPT.
                </p>
              </div>
              <div className="absolute top-[-5rem] right-[-68px]">
                <img
                  src="https://w.ladicdn.com/s500x500/62cc80bf27ee4c005c088d7e/hop-qua-20240618034114-i3oqt.png"
                  alt="Quà tặng"
                  className="w-32 h-32"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Phần đăng ký --> */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-lg font-semibold mb-4">
            Liên Hệ Tư Vấn Miễn Phí
          </h2>
          {/*==================== Form Controll ===========================*/}
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Số điện thoại
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-1"
                placeholder="Số điện thoại... "
                required
                ref={inputRef}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="fullName" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="text"
                id="fullName"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-1"
                placeholder="Email..."
                required
                ref={inputRef}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="flex px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-600 text-center ml-[20%]"
              >
                Đăng ký tư vấn
              </button>{" "}
              <h3 className="w-auto inline-block text-xs text-gray-400 p-3 text-center">
                Sau khi Đăng kí, bộ phận CSKH của trung tâm sẽ liên lạc để tư
                vấn thêm và xác nhận ý kiến.
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
