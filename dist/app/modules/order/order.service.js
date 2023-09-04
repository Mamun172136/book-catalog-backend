"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log('from service');
    //   console.log(data);
    const result = yield prisma_1.default.order.create({
        data,
    });
    return result;
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.findMany({});
    return result;
});
const getOrderBySepecific = (id, userId, role) => __awaiter(void 0, void 0, void 0, function* () {
    const result = null;
    if (role == 'admin') {
        console.log('admin');
        const result = yield prisma_1.default.order.findUnique({
            where: {
                id,
            },
        });
        return result;
    }
    if (role == 'customer') {
        console.log('customer');
        console.log(userId, id);
        const result = yield prisma_1.default.order.findUnique({
            where: {
                id,
                userId,
            },
        });
        console.log(result);
        return result;
    }
    return result;
});
exports.OrderService = {
    createOrder,
    getAllOrders,
    getOrderBySepecific,
};
