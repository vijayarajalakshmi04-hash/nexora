# NEXORA — Demo Version 1.0

Full-stack e-commerce demo (React + TypeScript + Tailwind · Node/Express · MongoDB/Mongoose · JWT + bcrypt).
**All products, prices, ratings and customers are DEMO DATA. Payment is Cash on Delivery only; no real or simulated online payments.**

## Run it locally
Requirements: Node.js 20+ and a MongoDB (local `mongod` on port 27017, or a MongoDB Atlas URI).

```bash
# 1. Backend
cd backend
npm install
cp .env.example .env          # then set JWT_SECRET to a long random string (and MONGO_URI if not local)
npm run seed                  # creates categories, 24 demo products, 2 demo users
                              # demo passwords are randomly generated and saved to backend/.demo-credentials.txt

# 2. Frontend (build once; the backend serves it)
cd ../frontend
npm install
npm run build

# 3. Start
cd ../backend
npm start                     # open http://localhost:5000
```
Dev mode with hot reload: run `npm run dev` in `backend/` (port 5000) and `npm run dev` in `frontend/` (port 5173, proxies /api).

## Demo logins
`admin@nexora.demo` and `customer@nexora.demo` — passwords are in `backend/.demo-credentials.txt` after seeding (git-ignored, never committed). Re-run `npm run seed` to regenerate.
Admins log in at the normal `/login` page and are redirected to `/admin`.

## Implemented
Customer: home, categories, product list with search / category / price / rating / stock filters and sorting, product details with reviews (only after a delivered order), guest cart (merged on login), wishlist, register/login, address book, checkout (COD), order confirmation, my orders, order tracking, cancellation (restores stock), profile and password change.
Admin: dashboard KPIs, product add/edit/archive, category CRUD, order list with validated status transitions, customers (enable/disable), inventory with stock updates, sales reports.
Security: bcrypt hashing, JWT, role-based authorization on all `/api/admin` routes, rate-limited auth endpoints, helmet, input validation, atomic stock reservation at checkout.

## Not implemented / pending
Razorpay (needs your test credentials), email/SMS notifications, password reset, image upload (admin uses image URLs or demo images), product variants.
**Automated tests (Playwright), Postman collection, formal test cases, bug reports and the testing summary are NOT yet produced** — see `docs/STATUS.md`.
