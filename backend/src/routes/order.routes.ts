import express from "express";
import { jwtCheck, jwtParse } from "../middleware/auth.middleware";
import OrderController from "../controllers/order.controller";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, OrderController.getMyOrders);

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
  OrderController.createCheckoutSession
);

router.post("/checkout/webhook", OrderController.stripeWebhookHandler);

export default router;
