# Đặc tả sản phẩm Website Câu lạc bộ Tin học

> Phiên bản tài liệu: 1.1  
> Ngày cập nhật: 14/09/2026  
> Trạng thái: Đã cập nhật phương án quản lý hình ảnh  
> Ngôn ngữ sản phẩm: Tiếng Việt

## 1. Tổng quan

Website là kênh thông tin chính thức của Câu lạc bộ Tin học thuộc Trường Công nghệ Thông tin và Truyền thông (CICT), Đại học Cần Thơ. Website giới thiệu câu lạc bộ, cơ cấu nhân sự qua các nhiệm kỳ và đặc biệt hỗ trợ truyền thông cho các hoạt động do câu lạc bộ tổ chức.

Sản phẩm ưu tiên trải nghiệm tra cứu và đăng ký hoạt động. Ở phiên bản đầu, người dùng được chuyển tới Google Form để đăng ký. Hệ thống đăng ký nội bộ và gửi email xác nhận được xem là hướng phát triển tương lai.

## 2. Mục tiêu sản phẩm

### 2.1. Mục tiêu chính

1. Xây dựng hình ảnh và độ tin cậy của câu lạc bộ.
2. Giúp sinh viên nhanh chóng tìm thấy hoạt động đang hoặc sắp mở đăng ký.
3. Cung cấp landing page đầy đủ cho từng hoạt động.
4. Lưu trữ lịch sử hoạt động và cơ cấu nhân sự qua các nhiệm kỳ.
5. Cung cấp thông tin chính thức cho giảng viên, đối tác và nhà tài trợ.

### 2.2. Hành động quan trọng của người dùng

- Xem hoạt động sắp diễn ra.
- Đọc thông tin chi tiết của một hoạt động.
- Mở Google Form để đăng ký.
- Xem kết quả hoặc nội dung tổng kết sau hoạt động.
- Tìm hiểu về câu lạc bộ và nhân sự từng nhiệm kỳ.
- Liên hệ câu lạc bộ qua các kênh chính thức.

## 3. Đối tượng sử dụng

### 3.1. Người dùng chính

- Sinh viên muốn tham gia hoạt động.
- Sinh viên muốn tìm hiểu hoặc gia nhập câu lạc bộ.
- Thành viên hiện tại của câu lạc bộ.

### 3.2. Người dùng phụ

- Giảng viên.
- Đối tác và nhà tài trợ.
- Khách quan tâm đến hoạt động của câu lạc bộ.

### 3.3. Người quản trị

- Có từ 2 đến 3 quản trị viên.
- Các quản trị viên có quyền ngang nhau.
- Không có chức năng tự đăng ký tài khoản quản trị.

## 4. Phạm vi phát hành

### 4.1. Phiên bản V1 — Website công khai

- Giữ nguyên cấu trúc và nội dung chức năng của trang chủ hiện tại.
- Hoàn thiện trang Giới thiệu.
- Hoàn thiện trang Nhân sự.
- Hoàn thiện trang danh sách Hoạt động.
- Xây dựng landing page dùng chung cho từng hoạt động.
- Sử dụng dữ liệu tĩnh có cấu trúc trong source code.
- Tạm thời duy trì cơ chế lấy ảnh Cloudinary đang có trên trang chủ để tránh mở rộng phạm vi V1.
- Đăng ký hoạt động qua Google Form hoặc liên kết ngoài.
- Không có đăng nhập cho khách truy cập.
- Chưa có trang quản trị.

### 4.2. Phiên bản V1.1 — Quản trị nội dung trọng tâm

- Có khu vực quản trị tách biệt với website công khai.
- Quản trị Hoạt động và nội dung landing page.
- Quản trị thư viện hình ảnh và vị trí sử dụng ảnh.
- Sử dụng Supabase Auth, PostgreSQL và Supabase Storage cho tài khoản quản trị, dữ liệu hoạt động và hình ảnh được quản lý.
- Chuyển dần các ảnh đang quản lý bằng Cloudinary sang Supabase Storage; sau khi hoàn tất, Cloudinary không còn là thành phần bắt buộc.
- Hỗ trợ bản nháp, xuất bản và lưu trữ nội dung.
- Xác thực bằng tài khoản và mật khẩu riêng.
- Các nội dung Giới thiệu, Nhân sự, FAQ, liên hệ và mạng xã hội vẫn được cố định trong source code ở giai đoạn này.

### 4.3. Ngoài phạm vi hiện tại

- Tài khoản dành cho khách truy cập hoặc thành viên.
- Đăng ký hoạt động trực tiếp trên website.
- Lưu danh sách người tham dự.
- Gửi email xác nhận đăng ký.
- Website đa ngôn ngữ.
- Trang cá nhân chi tiết cho từng thành viên.
- Công cụ phân tích truy cập bắt buộc.

## 5. Sơ đồ thông tin và định tuyến

```text
/
├── /about
├── /staff
├── /activities
│   └── /activities/:slug
└── /admin                         (V1.1, không hiển thị trên menu công khai)
    ├── /admin/login
    ├── /admin/activities
    ├── /admin/activities/new
    ├── /admin/activities/:id/edit
    └── /admin/media
```

Quy tắc đường dẫn:

- Slug hoạt động sử dụng chữ thường không dấu và dấu gạch ngang.
- Ví dụ: `/activities/lap-trinh-web-2026`.
- Slug phải duy nhất và ổn định sau khi hoạt động được xuất bản.
- Khi đổi tên hoạt động, slug cũ không tự động thay đổi.

## 6. Yêu cầu chức năng website công khai

### 6.1. Thành phần dùng chung

#### FR-COMMON-01 — Header

- Hiển thị logo chính thức của câu lạc bộ.
- Có liên kết tới Trang chủ, Giới thiệu, Nhân sự và Hoạt động.
- Đánh dấu trang đang được xem.
- Có menu phù hợp trên thiết bị di động.
- Không hiển thị liên kết đăng nhập quản trị trên menu công khai.

#### FR-COMMON-02 — Chế độ sáng/tối

- Tiếp tục hỗ trợ light mode và dark mode như phiên bản hiện tại.
- Ghi nhớ lựa chọn của người dùng trên trình duyệt.
- Tất cả trang mới phải sử dụng đầy đủ token màu của cả hai chế độ.

#### FR-COMMON-03 — Footer

- Hiển thị email, số điện thoại, liên kết điều hướng và mạng xã hội.
- Email hiện tại: `itc.cit.ctu@gmail.com`.
- Số `090909090909` hiện là dữ liệu mẫu; được phép giữ trong giai đoạn phát triển nhưng phải thay bằng số chính thức trước khi phát hành chính thức.
- Có thể dùng thông tin liên hệ này cho nhu cầu hợp tác với đối tác và nhà tài trợ.

### 6.2. Trang chủ

#### FR-HOME-01 — Phạm vi

Trang chủ V1 giữ nguyên cấu trúc đang có trong repo:

1. Hero với slideshow hình ảnh.
2. Phần giới thiệu/sứ mệnh và tầm nhìn.
3. Phần hoạt động.
4. Phần Teams.
5. Phần Q&A/FAQ.
6. Footer.

Trang chủ chưa được thiết kế lại trong phạm vi đặc tả này. Khi các trang còn lại hoàn thiện, có thể đánh giá lại tính nhất quán và điều chỉnh ở một phiên bản sau.

#### FR-HOME-02 — Hero

- Giữ cách trình chiếu hình ảnh hiện tại.
- Tự chuyển ảnh theo chu kỳ hiện hành.
- Cho phép chuyển ảnh thủ công trên desktop và chọn ảnh bằng indicator.
- Trong V1, ảnh tiếp tục được lấy từ Cloudinary như triển khai hiện tại. Từ V1.1, nguồn ảnh được chuyển sang Supabase Storage mà không làm thay đổi hành vi của Hero.
- Khi không tải được ảnh, nội dung chữ vẫn phải đọc được.

### 6.3. Trang Giới thiệu

#### FR-ABOUT-01 — Cấu trúc nội dung

Trang Giới thiệu gồm các phần theo thứ tự đề xuất:

1. Ảnh đại diện hoặc banner.
2. Chúng tôi là ai.
3. Sứ mệnh và tầm nhìn.
4. Giá trị cốt lõi.
5. Cơ cấu hoạt động: Ban Technical và Ban Operation.
6. Một số hình ảnh tiêu biểu.
7. CTA “Khám phá hoạt động của CLB” dẫn tới `/activities`.

#### FR-ABOUT-02 — Mô tả hai ban

- Mỗi ban có tên, mô tả ngắn và hình ảnh hoặc biểu tượng minh họa.
- Nội dung tập trung vào vai trò tổng quát, chưa cần liệt kê công việc chi tiết.
- Thông tin này được cố định trong source code ở V1 và V1.1.

#### FR-ABOUT-03 — Nội dung mở rộng

“Hành trình phát triển” và “Thành tích nổi bật” chỉ được bổ sung khi câu lạc bộ có dữ liệu chính xác, đủ hình ảnh và người chịu trách nhiệm cập nhật.

### 6.4. Trang Nhân sự

#### FR-STAFF-01 — Chọn nhiệm kỳ

- Hiển thị bộ chọn nhiệm kỳ theo mẫu “Nhiệm kỳ 2025–2026”.
- Mặc định chọn nhiệm kỳ mới nhất.
- Lưu và cho phép xem các nhiệm kỳ cũ.
- Danh sách nhiệm kỳ được sắp xếp mới nhất trước.

#### FR-STAFF-02 — Cơ cấu tổ chức

Trong mỗi nhiệm kỳ, cơ cấu chính thức gồm:

```text
Chủ nhiệm
├── Phó chủ nhiệm kiêm Trưởng ban Technical
│   └── Thành viên Ban Technical
├── Phó chủ nhiệm kiêm Trưởng ban Operation
│   └── Thành viên Ban Operation
└── Thư ký kiêm Thủ quỹ
```

Quy tắc:

- Mỗi nhiệm kỳ có đúng một Chủ nhiệm.
- Mỗi nhiệm kỳ có đúng hai Phó chủ nhiệm.
- Mỗi Phó chủ nhiệm đồng thời là Trưởng của một trong hai ban.
- Có đúng một người đồng thời đảm nhiệm Thư ký và Thủ quỹ.
- Thành viên của hai ban không có cấp Trưởng ban hoặc Phó ban riêng khác.
- Một người có thể đồng thời giữ nhiều chức vụ; giao diện hiển thị đầy đủ các chức vụ đó.

#### FR-STAFF-03 — Các team cấp câu lạc bộ

- AI, Web, Game và Mobile là các team trực thuộc câu lạc bộ, không trực thuộc riêng Ban Technical.
- Thành viên của cả Ban Technical và Ban Operation đều có thể là Lead hoặc Thành viên của các team.
- Một người có thể tham gia nhiều team nếu dữ liệu nhiệm kỳ cho phép.
- Cơ cấu team nên được hiển thị thành khu vực riêng bên dưới cây tổ chức để tránh tạo quan hệ phân cấp sai giữa team và hai ban.

#### FR-STAFF-04 — Node nhân sự

Mỗi node hiển thị:

- Avatar.
- Họ tên.
- Tất cả chức vụ trong nhiệm kỳ.
- Ban mà thành viên trực thuộc, khi phù hợp.

Node không có tương tác mở trang chi tiết hoặc popup trong phạm vi hiện tại.

#### FR-STAFF-05 — Avatar mặc định

- Nếu thành viên chưa có ảnh, hiển thị avatar người dùng trung tính tương tự tài khoản mạng xã hội mới.
- Avatar mặc định không được làm lộ giới tính hoặc suy đoán đặc điểm cá nhân.

#### FR-STAFF-06 — Responsive

- Desktop và tablet ngang: hiển thị cây tổ chức có đường nối cấp bậc.
- Điện thoại: chuyển thành các nhóm xếp dọc theo cấp bậc và đơn vị.
- Không yêu cầu người dùng cuộn ngang để đọc cây nhân sự.

### 6.5. Trang danh sách Hoạt động

#### FR-ACTIVITY-LIST-01 — Phân loại

Ba loại hoạt động ban đầu:

- Workshop.
- Game.
- Cuộc thi.

Mô hình dữ liệu phải cho phép bổ sung loại mới mà không cần thay đổi cấu trúc trang.

#### FR-ACTIVITY-LIST-02 — Bố cục

- Khu vực đầu hiển thị các hoạt động đang diễn ra và sắp diễn ra bằng thẻ nổi bật.
- Khu vực sau hiển thị hoạt động đã diễn ra bằng grid nhỏ hơn.
- Mỗi thẻ tối thiểu có ảnh bìa, tên, loại, thời gian, trạng thái và mô tả ngắn.
- Nhấn vào thẻ dẫn đến landing page của hoạt động.

#### FR-ACTIVITY-LIST-03 — Sắp xếp

- Hoạt động đang diễn ra và sắp diễn ra được ưu tiên trên hoạt động đã kết thúc.
- Trong nhóm sắp diễn ra, hoạt động có thời điểm bắt đầu gần nhất đứng trước.
- Trong nhóm đã kết thúc, hoạt động mới kết thúc gần nhất đứng trước.
- Hoạt động bị hủy vẫn có thể được công khai để truyền đạt thông báo, nhưng phải có nhãn “Đã hủy” rõ ràng.

#### FR-ACTIVITY-LIST-04 — Bộ lọc

Cho phép lọc theo:

- Loại hoạt động.
- Trạng thái thời gian.
- Năm.

Khi không có kết quả, hiển thị trạng thái rỗng và nút xóa bộ lọc.

### 6.6. Landing page Hoạt động

#### FR-ACTIVITY-DETAIL-01 — Cấu trúc

Landing page dùng một template thống nhất, hỗ trợ các phần:

1. Ảnh bìa, tên và nhãn trạng thái.
2. Thông tin nhanh: thời gian, địa điểm/hình thức, đối tượng tham gia.
3. CTA đăng ký hoặc CTA kết quả.
4. Giới thiệu.
5. Nội dung/chương trình.
6. Diễn giả hoặc ban tổ chức.
7. Quyền lợi hoặc thể lệ.
8. Thông tin liên hệ.
9. FAQ riêng của hoạt động.
10. Kết quả/tổng kết.
11. Thư viện ảnh sau hoạt động.
12. Hoạt động liên quan.

Các section không có dữ liệu sẽ không được hiển thị.

#### FR-ACTIVITY-DETAIL-02 — CTA đăng ký

- Khi đang mở đăng ký: hiển thị nút “Đăng ký ngay”, mở Google Form hoặc liên kết ngoài trong tab mới.
- Khi chưa mở đăng ký: hiển thị trạng thái “Sắp mở đăng ký”; chưa mở form.
- Khi hết hạn và chưa có kết quả: nút bị vô hiệu hóa với nội dung “Đã hết hạn đăng ký”.
- Khi hoạt động có nội dung hoặc liên kết kết quả: thay CTA bằng “Xem kết quả”.
- Khi hoạt động bị hủy: không hiển thị CTA đăng ký.

#### FR-ACTIVITY-DETAIL-03 — Kết quả

Hỗ trợ đồng thời:

- Nội dung kết quả/tổng kết được nhập và hiển thị trực tiếp trên website.
- Liên kết ngoài tới Facebook, Google Drive hoặc nguồn chính thức khác.

## 7. Mô hình trạng thái hoạt động

Hệ thống phải tách hai nhóm trạng thái độc lập.

### 7.1. Trạng thái nội dung

Trạng thái nội dung do quản trị viên điều khiển:

| Trạng thái | Hiển thị công khai | Ý nghĩa |
| --- | --- | --- |
| `DRAFT` — Bản nháp | Không | Nội dung đang soạn, chỉ admin xem và chỉnh sửa. |
| `PUBLISHED` — Đã xuất bản | Có | Nội dung chính thức xuất hiện trên danh sách và landing page công khai. |
| `ARCHIVED` — Đã lưu trữ | Không | Nội dung không còn dùng hoặc cần gỡ khỏi website nhưng vẫn được giữ trong hệ thống để tra cứu/khôi phục. |

“Đã lưu trữ” không đồng nghĩa với “Đã kết thúc”:

- Một hoạt động đã kết thúc thông thường vẫn ở trạng thái `PUBLISHED` để người dùng xem lịch sử, ảnh và kết quả.
- `ARCHIVED` chỉ dùng khi cần ẩn nội dung khỏi website, ví dụ bản thử nghiệm, nội dung trùng hoặc hoạt động không còn nên công khai.
- Lưu trữ không xóa dữ liệu và không giải phóng slug.

### 7.2. Trạng thái thời gian/nghiệp vụ

Trạng thái này được hệ thống tự tính từ thời gian và có thể được admin ghi đè khi cần:

- Sắp mở đăng ký.
- Đang mở đăng ký.
- Đã đóng đăng ký.
- Đang diễn ra.
- Đã kết thúc.
- Đã hủy.

Thứ tự ưu tiên xác định trạng thái:

1. Nếu có ghi đè thủ công hợp lệ, dùng trạng thái ghi đè.
2. Nếu thời gian hiện tại trước thời điểm mở đăng ký, trạng thái là “Sắp mở đăng ký”.
3. Nếu nằm trong khoảng mở đăng ký đến hạn đăng ký, trạng thái là “Đang mở đăng ký”.
4. Nếu đã qua hạn đăng ký nhưng chưa tới thời gian bắt đầu, trạng thái là “Đã đóng đăng ký”.
5. Nếu nằm trong khoảng bắt đầu và kết thúc, trạng thái là “Đang diễn ra”.
6. Nếu đã qua thời gian kết thúc, trạng thái là “Đã kết thúc”.

Với hoạt động không yêu cầu đăng ký, hệ thống bỏ qua các mốc đăng ký và xác định theo thời gian bắt đầu/kết thúc. Mọi phép tính dùng múi giờ `Asia/Ho_Chi_Minh`.

## 8. Yêu cầu quản trị V1.1

### 8.1. Xác thực và quyền

#### FR-ADMIN-AUTH-01

- Admin đăng nhập bằng tài khoản và mật khẩu riêng thông qua Supabase Auth.
- Không cho phép đăng ký tài khoản từ giao diện.
- Tài khoản được người phụ trách kỹ thuật tạo trước.
- Mật khẩu không được lưu trong frontend, source code hoặc cơ sở dữ liệu do ứng dụng tự quản lý.
- Frontend chỉ sử dụng khóa công khai dành cho client; Supabase service role key không được đưa vào mã chạy trên trình duyệt.
- Quyền ghi dữ liệu và file phải được bảo vệ bằng Row Level Security và chỉ cấp cho tài khoản admin hợp lệ.
- Có giới hạn số lần đăng nhập sai và nhật ký tối thiểu cho thao tác xuất bản/lưu trữ.

Tài khoản Google không phải yêu cầu bắt buộc. Với 2–3 admin, đăng nhập email/mật khẩu riêng qua Supabase Auth đáp ứng phạm vi hiện tại và tránh việc ứng dụng tự xây cơ chế lưu mật khẩu.

### 8.2. Quản lý hoạt động

#### FR-ADMIN-ACTIVITY-01

Admin có thể:

- Tạo hoạt động ở trạng thái bản nháp.
- Chỉnh sửa toàn bộ trường dữ liệu và nội dung landing page.
- Xem trước bản nháp.
- Xuất bản hoạt động.
- Chuyển hoạt động sang lưu trữ và khôi phục.
- Chọn hoặc tải ảnh bìa và ảnh thư viện.
- Đặt hoặc xóa trạng thái nghiệp vụ ghi đè.
- Nhập nội dung kết quả và liên kết kết quả ngoài.

#### FR-ADMIN-ACTIVITY-02 — Validation

- Tên, slug, loại, mô tả ngắn, ảnh bìa, thời gian bắt đầu và thời gian kết thúc là bắt buộc trước khi xuất bản.
- Thời gian kết thúc phải sau thời gian bắt đầu.
- Hạn đăng ký không được sau thời gian kết thúc.
- Nếu trạng thái tính toán có giai đoạn “Đang mở đăng ký”, phải có link đăng ký hợp lệ.
- Slug phải duy nhất.
- Link ngoài phải dùng `https://`, trừ môi trường phát triển.

### 8.3. Quản lý hình ảnh

#### FR-ADMIN-MEDIA-01 — Chức năng

Trang Media cho phép:

- Tải một hoặc nhiều ảnh lên.
- Xem ảnh dạng grid.
- Tìm/lọc theo tên, thư mục hoặc mục đích sử dụng.
- Chọn lại ảnh đã có thay vì tải bản trùng.
- Nhập và chỉnh sửa alt text.
- Xem ảnh đang được dùng ở đâu.
- Thay ảnh đang dùng bằng một ảnh mới mà không làm mất lịch sử tham chiếu.
- Lưu trữ ảnh không còn dùng.
- Chỉ xóa vĩnh viễn ảnh khi ảnh không còn được tham chiếu và admin xác nhận.

#### FR-ADMIN-MEDIA-02 — Kiến trúc Supabase Storage

Luồng tải ảnh V1.1:

```text
Admin Browser
    │ đăng nhập
    ▼
Supabase Auth
    │ xác thực admin
    ▼
Supabase Storage
    │ kiểm tra Storage policy và lưu file
    ▼
PostgreSQL lưu metadata ảnh và vị trí sử dụng
    ▼
Website công khai nhận dữ liệu ảnh của nội dung đã xuất bản
```

Quy tắc bảo mật và lưu trữ:

- Bucket chứa ảnh công khai cho phép khách truy cập đọc file nhưng chỉ admin được tải lên, cập nhật, lưu trữ hoặc xóa.
- Mọi thao tác ghi phải được kiểm tra bằng Supabase Auth và Row Level Security.
- Lưu `bucket` và `objectPath` làm định danh vị trí file; URL phân phối được tạo từ hai giá trị này và không phải nguồn dữ liệu chính.
- Metadata tối thiểu gồm tên file gốc, alt text, kích thước, định dạng, dung lượng, thư mục/tag, thời điểm tạo, người tạo và vị trí đang sử dụng.
- Dùng các thư mục logic như `it-club/hero`, `it-club/activities/{slug}/cover` và `it-club/activities/{slug}/gallery`.
- Chỉ chấp nhận định dạng ảnh được cấu hình cho phép; giới hạn dung lượng và kích thước được kiểm tra trước khi tải lên.
- Ảnh dùng trên website phải được nén và dùng định dạng phù hợp. Khi chưa sử dụng dịch vụ biến đổi ảnh tự động, hệ thống tạo hoặc yêu cầu bản ảnh đã tối ưu trước khi lưu.

#### FR-ADMIN-MEDIA-03 — Thay thế, lưu trữ và xóa ảnh

- Khi thay ảnh, hệ thống tải file mới lên một `objectPath` mới rồi cập nhật tham chiếu của nội dung sang ảnh mới.
- Không ghi đè file cũ tại cùng đường dẫn vì trình duyệt hoặc CDN có thể tiếp tục dùng bản đã cache.
- Ảnh cũ được chuyển sang trạng thái `ARCHIVED` và vẫn có thể khôi phục khi cần.
- Hệ thống không cho xóa vĩnh viễn ảnh còn được tham chiếu bởi hoạt động, Hero hoặc thư viện ảnh.
- Xóa vĩnh viễn là thao tác có xác nhận và phải xóa đồng bộ file trong Storage cùng metadata tương ứng.

Ở V1, cơ chế tải danh sách ảnh bằng tag Cloudinary hiện tại được giữ như một phần chuyển tiếp. V1.1 chuyển các ảnh do admin quản lý sang Supabase Storage và metadata nội bộ. Sau khi ảnh trang chủ được di chuyển và kiểm tra, mã phụ thuộc Cloudinary có thể được loại bỏ.

## 9. Mô hình dữ liệu khái niệm

### 9.1. Member

| Trường | Kiểu | Bắt buộc | Ghi chú |
| --- | --- | --- | --- |
| `id` | ID | Có | Định danh dùng chung qua nhiều nhiệm kỳ. |
| `fullName` | String | Có | Họ tên hiển thị. |
| `avatar` | Media/URL | Không | Thiếu ảnh thì dùng avatar mặc định. |

### 9.2. Term

| Trường | Kiểu | Bắt buộc | Ghi chú |
| --- | --- | --- | --- |
| `id` | ID | Có | Định danh nhiệm kỳ. |
| `name` | String | Có | Ví dụ “Nhiệm kỳ 2025–2026”. |
| `startYear` | Number | Có | Dùng để sắp xếp. |
| `endYear` | Number | Có | Phải lớn hơn `startYear`. |

### 9.3. OrganizationAssignment

| Trường | Kiểu | Bắt buộc | Ghi chú |
| --- | --- | --- | --- |
| `memberId` | ID | Có | Liên kết Member. |
| `termId` | ID | Có | Liên kết Term. |
| `role` | Enum | Có | `CHAIR`, `VICE_CHAIR_DEPARTMENT_LEAD`, `SECRETARY_TREASURER`, `DEPARTMENT_MEMBER`. |
| `department` | Enum | Tùy vai trò | `TECHNICAL` hoặc `OPERATION`. |
| `displayOrder` | Number | Không | Điều chỉnh thứ tự hiển thị. |

### 9.4. TeamMembership

| Trường | Kiểu | Bắt buộc | Ghi chú |
| --- | --- | --- | --- |
| `memberId` | ID | Có | Liên kết Member. |
| `termId` | ID | Có | Thành viên team theo nhiệm kỳ. |
| `team` | Enum/String | Có | Ban đầu: `AI`, `WEB`, `GAME`, `MOBILE`. |
| `teamRole` | Enum | Có | `LEAD` hoặc `MEMBER`. |

### 9.5. Activity

| Nhóm | Trường chính |
| --- | --- |
| Định danh | `id`, `slug`, `title`, `category` |
| Truyền thông | `coverImage`, `summary`, `content`, `gallery` |
| Thời gian | `registrationOpensAt`, `registrationDeadline`, `startsAt`, `endsAt` |
| Tổ chức | `location`, `onlineUrl`, `organizer`, `audience`, `expectedCapacity` |
| Đăng ký | `registrationUrl` |
| Nội dung chi tiết | `agenda`, `speakers`, `organizers`, `benefitsOrRules`, `faq` |
| Kết quả | `resultContent`, `resultUrl` |
| Liên hệ | `contactName`, `contactEmail`, `contactPhone` |
| Trạng thái | `contentStatus`, `statusOverride` |
| Hệ thống | `createdAt`, `updatedAt`, `publishedAt` |

### 9.6. MediaAsset — V1.1

| Trường | Ghi chú |
| --- | --- |
| `id` | Định danh trong hệ thống. |
| `bucket` | Bucket Supabase Storage chứa file. |
| `objectPath` | Đường dẫn file duy nhất trong bucket. |
| `originalName` | Tên file khi admin tải lên. |
| `altText` | Mô tả phục vụ accessibility và SEO. |
| `width`, `height`, `mimeType`, `bytes` | Metadata kỹ thuật. |
| `folder`, `tags` | Phân loại nội dung. |
| `status` | `ACTIVE` hoặc `ARCHIVED`. |
| `createdAt`, `createdBy`, `archivedAt` | Thông tin quản trị và vòng đời. |

URL phân phối HTTPS được tạo từ `bucket` và `objectPath`. Hệ thống không phụ thuộc vào URL tuyệt đối được lưu cố định trong dữ liệu.

### 9.7. ActivityMedia — V1.1

| Trường | Ghi chú |
| --- | --- |
| `activityId` | Hoạt động sử dụng ảnh. |
| `mediaId` | Tham chiếu tới `MediaAsset`. |
| `usage` | `COVER` hoặc `GALLERY`. |
| `displayOrder` | Thứ tự hiển thị trong thư viện ảnh. |

Quan hệ này cho phép một ảnh được tái sử dụng, giúp Media Library xác định ảnh đang xuất hiện ở đâu và ngăn xóa nhầm.

## 10. Luồng người dùng chính

### 10.1. Tìm và đăng ký hoạt động

```text
Trang chủ hoặc Trang Hoạt động
→ xem hoạt động đang/sắp diễn ra
→ mở landing page
→ kiểm tra thời gian, địa điểm và đối tượng
→ chọn “Đăng ký ngay”
→ mở Google Form ở tab mới
```

### 10.2. Xem kết quả hoạt động

```text
Trang Hoạt động
→ lọc/xem hoạt động đã kết thúc
→ mở landing page
→ đọc tổng kết trên web hoặc chọn liên kết kết quả ngoài
```

### 10.3. Xem nhân sự một nhiệm kỳ

```text
Trang Nhân sự
→ mặc định xem nhiệm kỳ mới nhất
→ chọn nhiệm kỳ cũ
→ xem cây cơ cấu và các team của nhiệm kỳ đó
```

### 10.4. Admin xuất bản hoạt động — V1.1

```text
Đăng nhập
→ tạo bản nháp
→ nhập thông tin và chọn ảnh
→ xem trước
→ sửa lỗi validation nếu có
→ xuất bản
→ hoạt động xuất hiện trên website công khai
```

## 11. Yêu cầu phi chức năng

### 11.1. Responsive và tương thích

- Thiết kế mobile-first, sử dụng tốt từ điện thoại đến desktop.
- Hỗ trợ phiên bản hiện hành của Chrome, Edge, Safari và Firefox.
- Không có cuộn ngang ngoài ý muốn ở viewport từ 320 px trở lên.

### 11.2. Accessibility

- Mức tương phản màu hướng tới WCAG 2.2 AA.
- Có focus state nhìn thấy được cho link, button và form control.
- Điều hướng và thao tác chính sử dụng được bằng bàn phím.
- Ảnh nội dung có alt text; ảnh trang trí dùng alt rỗng.
- Cấu trúc heading đúng thứ tự và chỉ có một `h1` chính trên mỗi trang.
- Trạng thái không chỉ được biểu đạt bằng màu sắc.

### 11.3. Hiệu năng

- Lazy-load ảnh nằm ngoài vùng nhìn ban đầu.
- Phân phối ảnh qua Supabase Storage/CDN với kích thước và định dạng phù hợp cho vị trí hiển thị.
- Tối ưu ảnh trước khi tải lên hoặc trong quy trình xử lý ảnh; không đưa ảnh gốc dung lượng lớn trực tiếp vào giao diện công khai.
- Hạn chế layout shift bằng cách khai báo tỷ lệ/kích thước ảnh.
- Có skeleton hoặc loading state phù hợp khi tải nội dung bất đồng bộ.
- Lỗi tải ảnh hoặc dữ liệu không được làm hỏng toàn bộ trang.

### 11.4. SEO và chia sẻ

- Mỗi trang có title và meta description riêng.
- Landing page có title, description, canonical URL và Open Graph image.
- Nội dung hoạt động sử dụng HTML ngữ nghĩa.
- Có sitemap và robots policy phù hợp khi triển khai production.
- Route quản trị không được index.

### 11.5. Bảo mật và riêng tư

- V1 không thu thập hoặc lưu dữ liệu cá nhân của người đăng ký.
- Link Google Form phải được nhận diện là liên kết ngoài.
- Không để secret hoặc thông tin xác thực trong source frontend.
- Nội dung do admin nhập phải được làm sạch trước khi render để tránh XSS.
- API quản trị phải kiểm tra xác thực và quyền ở backend, không chỉ ẩn nút trên giao diện.
- Supabase service role key không được xuất hiện trong frontend; mọi policy của Storage và bảng dữ liệu phải mặc định từ chối quyền ghi đối với khách.

### 11.6. Trạng thái hệ thống

Các trang có dữ liệu động phải có tối thiểu:

- Loading state.
- Empty state.
- Error state và hành động thử lại khi phù hợp.
- Not found state cho slug hoạt động không tồn tại.

## 12. Tiêu chí nghiệm thu

### 12.1. V1

- Bốn mục điều hướng công khai hoạt động đúng.
- Trang chủ không bị thay đổi ngoài các chỉnh sửa cần thiết để đồng bộ kỹ thuật.
- Trang Giới thiệu hiển thị đủ các section đã thống nhất.
- Trang Nhân sự mặc định hiển thị nhiệm kỳ mới nhất và chuyển được sang nhiệm kỳ cũ.
- Cây nhân sự thể hiện đúng hai Phó chủ nhiệm kiêm trưởng hai ban và một người kiêm Thư ký–Thủ quỹ.
- Cấu trúc team không bị thể hiện sai là trực thuộc riêng Ban Technical.
- Nhân sự không có ảnh được hiển thị bằng avatar mặc định.
- Trang Hoạt động ưu tiên hoạt động đang/sắp diễn ra và sắp xếp hoạt động cũ đúng quy tắc.
- Bộ lọc loại, trạng thái và năm hoạt động đúng.
- Mỗi thẻ hoạt động mở đúng landing page bằng slug.
- CTA đăng ký/kết quả thay đổi đúng theo trạng thái.
- Website sử dụng tốt trên màn hình 320 px, tablet và desktop.
- Light mode và dark mode không có nội dung mất tương phản hoặc không đọc được.
- Build và lint của repo hoàn tất không có lỗi.

### 12.2. V1.1

- Người không đăng nhập không truy cập được API hoặc màn hình quản trị được bảo vệ.
- Admin tạo, xem trước, xuất bản, lưu trữ và khôi phục hoạt động được.
- Bản nháp và nội dung lưu trữ không xuất hiện công khai.
- Hoạt động đã kết thúc nhưng còn `PUBLISHED` vẫn hiển thị ở khu vực hoạt động đã qua.
- Admin tải được ảnh lên Supabase Storage sau khi đăng nhập; người dùng không có quyền admin không thể tải lên, sửa hoặc xóa ảnh.
- Ảnh mới được ghi vào `MediaAsset` bằng `bucket` và `objectPath`, sau đó có thể chọn làm ảnh bìa hoặc ảnh gallery.
- Thay ảnh tạo file mới, cập nhật tham chiếu và lưu trữ ảnh cũ; website công khai hiển thị ảnh mới mà không bị ảnh hưởng bởi cache của đường dẫn cũ.
- Media Library cho biết ảnh đang được sử dụng và ngăn xóa nhầm ảnh đang được tham chiếu.
- Chỉ ảnh không còn tham chiếu mới có thể bị xóa vĩnh viễn sau khi admin xác nhận.
- Validation ngăn xuất bản hoạt động thiếu dữ liệu bắt buộc hoặc có mốc thời gian không hợp lệ.

## 13. Định hướng kiến trúc cho giai đoạn tiếp theo

Sau khi đặc tả được duyệt, phần đề xuất kiến trúc cần giải quyết:

- Pattern tổ chức source code React theo feature/domain.
- Tách domain model khỏi UI component.
- Repository/service layer để V1 dùng dữ liệu tĩnh nhưng có thể chuyển sang API ở V1.1.
- Cách tính trạng thái hoạt động tại một nơi duy nhất và có unit test.
- Supabase Auth, PostgreSQL, Row Level Security và Supabase Storage cho V1.1.
- Media repository tách UI khỏi nhà cung cấp lưu trữ và hỗ trợ giai đoạn chuyển đổi từ Cloudinary.
- Quy trình upload, tối ưu ảnh, quản lý metadata và kiểm tra tham chiếu trước khi xóa.
- Design system gồm token, primitive, component dùng chung và page pattern.
- Kế hoạch migration từng bước để không phải viết lại toàn bộ frontend.

Supabase được chọn làm nền tảng backend mục tiêu cho V1.1. Cấu trúc module, schema triển khai chi tiết và UI design system sẽ được hoàn thiện ở bước kiến trúc/UI tiếp theo.

## 14. Giả định và nội dung cần hoàn thiện sau

- Tên hiển thị chính thức đầy đủ của câu lạc bộ trên metadata/legal footer cần được xác nhận trước production.
- Nội dung chính thức cho “Chúng tôi là ai”, Giá trị cốt lõi và mô tả hai ban sẽ do câu lạc bộ cung cấp hoặc duyệt.
- Ảnh và danh sách nhân sự phải có quyền sử dụng công khai.
- Số điện thoại Chủ nhiệm sẽ thay thế số mẫu trước khi phát hành chính thức.
- Số lượng Lead tối đa của mỗi team chưa bị ràng buộc; mô hình dữ liệu cho phép một hoặc nhiều Lead.
- Các chỉ số thành công định lượng sẽ được bổ sung nếu câu lạc bộ triển khai analytics ở phiên bản sau.
