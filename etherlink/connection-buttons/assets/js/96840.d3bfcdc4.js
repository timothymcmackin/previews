"use strict";
exports.id = 96840;
exports.ids = [96840];
exports.modules = {

/***/ 96840:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onSessionProposal: () => (/* binding */ onSessionProposal)
/* harmony export */ });
/* unused harmony exports disconnectExistingSessions, acceptSessionProposal */
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87366);
/* harmony import */ var _session_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39624);


/**
 * @internal
 */
async function onSessionProposal(options) {
    const { wallet, walletConnectClient, event, chains, onConnect } = options;
    const account = wallet.getAccount();
    if (!account) {
        throw new Error("No account connected to provided wallet");
    }
    const origin = event.verifyContext?.verified?.origin;
    if (origin) {
        await disconnectExistingSessions({ origin, walletConnectClient });
    }
    const session = await acceptSessionProposal({
        account,
        walletConnectClient,
        sessionProposal: event,
        chains,
    });
    await (0,_session_store_js__WEBPACK_IMPORTED_MODULE_0__/* .saveSession */ .Aj)(session);
    wallet.subscribe("disconnect", () => {
        (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .disconnectWalletConnectSession */ .$b)({ session, walletConnectClient });
    });
    onConnect?.(session);
}
/**
 * @internal
 */
async function disconnectExistingSessions({ walletConnectClient, origin, }) {
    const sessions = await (0,_session_store_js__WEBPACK_IMPORTED_MODULE_0__/* .getSessions */ .Rx)();
    for (const session of sessions) {
        if (session.origin === origin) {
            await (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .disconnectWalletConnectSession */ .$b)({ session, walletConnectClient });
        }
    }
}
/**
 * @internal
 */
async function acceptSessionProposal({ account, walletConnectClient, sessionProposal, chains, }) {
    if (!sessionProposal.params.requiredNamespaces?.eip155 &&
        !sessionProposal.params.optionalNamespaces?.eip155) {
        throw new Error("No EIP155 namespace found in Wallet Connect session proposal");
    }
    const namespaces = {
        chains: [
            ...Array.from(new Set([
                ...(sessionProposal.params.requiredNamespaces?.eip155?.chains?.map((chain) => `${chain}:${account.address}`) ?? []),
                ...(sessionProposal.params.optionalNamespaces?.eip155?.chains?.map((chain) => `${chain}:${account.address}`) ?? []),
                ...(chains?.map((chain) => `eip155:${chain.id}:${account.address}`) ??
                    []),
            ])),
        ],
        methods: [
            ...(sessionProposal.params.requiredNamespaces?.eip155?.methods ?? []),
            ...(sessionProposal.params.optionalNamespaces?.eip155?.methods ?? []),
        ],
        events: [
            ...(sessionProposal.params.requiredNamespaces?.eip155?.events ?? []),
            ...(sessionProposal.params.optionalNamespaces?.eip155?.events ?? []),
        ],
    };
    const approval = await walletConnectClient.approve({
        id: sessionProposal.id,
        namespaces: {
            eip155: {
                accounts: namespaces.chains,
                methods: namespaces.methods,
                events: namespaces.events,
            },
        },
    });
    const session = await approval.acknowledged();
    return {
        topic: session.topic,
        origin: sessionProposal.verifyContext?.verified?.origin || "Unknown origin",
    };
}
//# sourceMappingURL=session-proposal.js.map

/***/ })

};
;