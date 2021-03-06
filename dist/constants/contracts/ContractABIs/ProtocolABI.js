"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolABI = [
    {
        "name": "ProtocolParameterUpdateNotification",
        "inputs": [
            {
                "type": "string",
                "name": "_notification_key",
                "indexed": false
            },
            {
                "type": "address",
                "name": "_address",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "_notification_value",
                "indexed": false
            }
        ],
        "anonymous": false,
        "type": "event"
    },
    {
        "name": "PositionUpdateNotification",
        "inputs": [
            {
                "type": "address",
                "name": "_wrangler",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "_position_hash",
                "indexed": true
            },
            {
                "type": "string",
                "name": "_notification_key",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "_notification_value",
                "indexed": false
            }
        ],
        "anonymous": false,
        "type": "event"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "type": "address",
                "name": "_protocol_token_address"
            }
        ],
        "constant": false,
        "payable": false,
        "type": "constructor"
    },
    {
        "name": "ecrecover_from_signature",
        "outputs": [
            {
                "type": "address",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "_hash"
            },
            {
                "type": "bytes",
                "name": "_sig"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 6582
    },
    {
        "name": "is_signer",
        "outputs": [
            {
                "type": "bool",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "_prover"
            },
            {
                "type": "bytes32",
                "name": "_hash"
            },
            {
                "type": "bytes",
                "name": "_sig"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 20450
    },
    {
        "name": "can_borrow",
        "outputs": [
            {
                "type": "bool",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "_address"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 921
    },
    {
        "name": "can_lend",
        "outputs": [
            {
                "type": "bool",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "_address"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 951
    },
    {
        "name": "filled_or_cancelled_loan_amount",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "_kernel_hash"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1233
    },
    {
        "name": "position",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            },
            {
                "type": "address",
                "name": "out"
            },
            {
                "type": "address",
                "name": "out"
            },
            {
                "type": "address",
                "name": "out"
            },
            {
                "type": "address",
                "name": "out"
            },
            {
                "type": "address",
                "name": "out"
            },
            {
                "type": "uint256",
                "name": "out",
                "unit": "sec"
            },
            {
                "type": "uint256",
                "name": "out",
                "unit": "sec"
            },
            {
                "type": "uint256",
                "name": "out",
                "unit": "sec"
            },
            {
                "type": "address",
                "name": "out"
            },
            {
                "type": "address",
                "name": "out"
            },
            {
                "type": "uint256",
                "name": "out"
            },
            {
                "type": "uint256",
                "name": "out"
            },
            {
                "type": "uint256",
                "name": "out"
            },
            {
                "type": "uint256",
                "name": "out"
            },
            {
                "type": "uint256",
                "name": "out"
            },
            {
                "type": "uint256",
                "name": "out"
            },
            {
                "type": "uint256",
                "name": "out"
            },
            {
                "type": "uint256",
                "name": "out"
            },
            {
                "type": "uint256",
                "name": "out"
            },
            {
                "type": "uint256",
                "name": "out"
            },
            {
                "type": "bytes32",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "_position_hash"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 9469
    },
    {
        "name": "position_counts",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            },
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "_address"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1228
    },
    {
        "name": "kernel_hash",
        "outputs": [
            {
                "type": "bytes32",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address[6]",
                "name": "_addresses"
            },
            {
                "type": "uint256[5]",
                "name": "_values"
            },
            {
                "type": "uint256",
                "name": "_kernel_expires_at",
                "unit": "sec"
            },
            {
                "type": "bytes32",
                "name": "_creator_salt"
            },
            {
                "type": "uint256",
                "name": "_daily_interest_rate"
            },
            {
                "type": "uint256",
                "name": "_position_duration_in_seconds",
                "unit": "sec"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2351
    },
    {
        "name": "position_hash",
        "outputs": [
            {
                "type": "bytes32",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address[7]",
                "name": "_addresses"
            },
            {
                "type": "uint256[7]",
                "name": "_values"
            },
            {
                "type": "uint256",
                "name": "_lend_currency_owed_value"
            },
            {
                "type": "uint256",
                "name": "_nonce"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2510
    },
    {
        "name": "owed_value",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "uint256",
                "name": "_filled_value"
            },
            {
                "type": "uint256",
                "name": "_kernel_daily_interest_rate"
            },
            {
                "type": "uint256",
                "name": "_position_duration_in_seconds",
                "unit": "sec"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2438
    },
    {
        "name": "escape_hatch_token",
        "outputs": [
            {
                "type": "bool",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "_token_address"
            }
        ],
        "constant": false,
        "payable": false,
        "type": "function",
        "gas": 3982
    },
    {
        "name": "set_position_threshold",
        "outputs": [
            {
                "type": "bool",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "uint256",
                "name": "_value"
            }
        ],
        "constant": false,
        "payable": false,
        "type": "function",
        "gas": 45951
    },
    {
        "name": "set_wrangler_status",
        "outputs": [
            {
                "type": "bool",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "_address"
            },
            {
                "type": "bool",
                "name": "_is_active"
            }
        ],
        "constant": false,
        "payable": false,
        "type": "function",
        "gas": 46196
    },
    {
        "name": "set_token_support",
        "outputs": [
            {
                "type": "bool",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "_address"
            },
            {
                "type": "bool",
                "name": "_is_active"
            }
        ],
        "constant": false,
        "payable": false,
        "type": "function",
        "gas": 47023
    },
    {
        "name": "open_position",
        "outputs": [],
        "inputs": [
            {
                "type": "address",
                "name": "_kernel_creator"
            },
            {
                "type": "address[6]",
                "name": "_addresses"
            },
            {
                "type": "uint256[7]",
                "name": "_values"
            },
            {
                "type": "uint256",
                "name": "_nonce"
            },
            {
                "type": "uint256",
                "name": "_kernel_daily_interest_rate"
            },
            {
                "type": "uint256",
                "name": "_position_duration_in_seconds",
                "unit": "sec"
            },
            {
                "type": "uint256",
                "name": "_approval_expires",
                "unit": "sec"
            },
            {
                "type": "bytes",
                "name": "_sig_data"
            }
        ],
        "constant": false,
        "payable": false,
        "type": "function",
        "gas": 1227545
    },
    {
        "name": "topup_position",
        "outputs": [
            {
                "type": "bool",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "_position_hash"
            },
            {
                "type": "uint256",
                "name": "_borrow_currency_increment"
            }
        ],
        "constant": false,
        "payable": false,
        "type": "function",
        "gas": 849964
    },
    {
        "name": "liquidate_position",
        "outputs": [
            {
                "type": "bool",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "_position_hash"
            }
        ],
        "constant": false,
        "payable": false,
        "type": "function",
        "gas": 1148595
    },
    {
        "name": "close_position",
        "outputs": [
            {
                "type": "bool",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "_position_hash"
            }
        ],
        "constant": false,
        "payable": false,
        "type": "function",
        "gas": 1150640
    },
    {
        "name": "fill_kernel",
        "outputs": [
            {
                "type": "bool",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address[6]",
                "name": "_addresses"
            },
            {
                "type": "uint256[7]",
                "name": "_values"
            },
            {
                "type": "uint256",
                "name": "_nonce"
            },
            {
                "type": "uint256",
                "name": "_kernel_daily_interest_rate"
            },
            {
                "type": "bool",
                "name": "_is_creator_lender"
            },
            {
                "type": "uint256[2]",
                "name": "_timestamps"
            },
            {
                "type": "uint256",
                "name": "_position_duration_in_seconds",
                "unit": "sec"
            },
            {
                "type": "bytes32",
                "name": "_kernel_creator_salt"
            },
            {
                "type": "bytes",
                "name": "_sig_data_kernel_creator"
            },
            {
                "type": "bytes",
                "name": "_sig_data_wrangler"
            }
        ],
        "constant": false,
        "payable": false,
        "type": "function",
        "gas": 1636610
    },
    {
        "name": "cancel_kernel",
        "outputs": [
            {
                "type": "bool",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address[6]",
                "name": "_addresses"
            },
            {
                "type": "uint256[5]",
                "name": "_values"
            },
            {
                "type": "uint256",
                "name": "_kernel_expires",
                "unit": "sec"
            },
            {
                "type": "bytes32",
                "name": "_kernel_creator_salt"
            },
            {
                "type": "uint256",
                "name": "_kernel_daily_interest_rate"
            },
            {
                "type": "uint256",
                "name": "_position_duration_in_seconds",
                "unit": "sec"
            },
            {
                "type": "bytes",
                "name": "_sig_data"
            },
            {
                "type": "uint256",
                "name": "_lend_currency_cancel_value"
            }
        ],
        "constant": false,
        "payable": false,
        "type": "function",
        "gas": 82115
    },
    {
        "name": "protocol_token_address",
        "outputs": [
            {
                "type": "address",
                "name": "out"
            }
        ],
        "inputs": [],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1203
    },
    {
        "name": "owner",
        "outputs": [
            {
                "type": "address",
                "name": "out"
            }
        ],
        "inputs": [],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1233
    },
    {
        "name": "kernels_filled",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1396
    },
    {
        "name": "kernels_cancelled",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1426
    },
    {
        "name": "positions__index",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1528
    },
    {
        "name": "positions__kernel_creator",
        "outputs": [
            {
                "type": "address",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1564
    },
    {
        "name": "positions__lender",
        "outputs": [
            {
                "type": "address",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1594
    },
    {
        "name": "positions__borrower",
        "outputs": [
            {
                "type": "address",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1624
    },
    {
        "name": "positions__relayer",
        "outputs": [
            {
                "type": "address",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1654
    },
    {
        "name": "positions__wrangler",
        "outputs": [
            {
                "type": "address",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1684
    },
    {
        "name": "positions__created_at",
        "outputs": [
            {
                "type": "uint256",
                "name": "out",
                "unit": "sec"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1714
    },
    {
        "name": "positions__updated_at",
        "outputs": [
            {
                "type": "uint256",
                "name": "out",
                "unit": "sec"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1744
    },
    {
        "name": "positions__expires_at",
        "outputs": [
            {
                "type": "uint256",
                "name": "out",
                "unit": "sec"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1774
    },
    {
        "name": "positions__borrow_currency_address",
        "outputs": [
            {
                "type": "address",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1804
    },
    {
        "name": "positions__lend_currency_address",
        "outputs": [
            {
                "type": "address",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1834
    },
    {
        "name": "positions__borrow_currency_value",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1864
    },
    {
        "name": "positions__borrow_currency_current_value",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1894
    },
    {
        "name": "positions__lend_currency_filled_value",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1924
    },
    {
        "name": "positions__lend_currency_owed_value",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1954
    },
    {
        "name": "positions__status",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1984
    },
    {
        "name": "positions__nonce",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2014
    },
    {
        "name": "positions__relayer_fee",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2044
    },
    {
        "name": "positions__monitoring_fee",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2074
    },
    {
        "name": "positions__rollover_fee",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2104
    },
    {
        "name": "positions__closure_fee",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2134
    },
    {
        "name": "positions__hash",
        "outputs": [
            {
                "type": "bytes32",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "bytes32",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2164
    },
    {
        "name": "last_position_index",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 1983
    },
    {
        "name": "position_index",
        "outputs": [
            {
                "type": "bytes32",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "uint256",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2146
    },
    {
        "name": "position_threshold",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2043
    },
    {
        "name": "borrow_positions",
        "outputs": [
            {
                "type": "bytes32",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "arg0"
            },
            {
                "type": "uint256",
                "name": "arg1"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2366
    },
    {
        "name": "lend_positions",
        "outputs": [
            {
                "type": "bytes32",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "arg0"
            },
            {
                "type": "uint256",
                "name": "arg1"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2396
    },
    {
        "name": "borrow_positions_count",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2305
    },
    {
        "name": "lend_positions_count",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2335
    },
    {
        "name": "wranglers",
        "outputs": [
            {
                "type": "bool",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2365
    },
    {
        "name": "wrangler_nonces",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "arg0"
            },
            {
                "type": "address",
                "name": "arg1"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2555
    },
    {
        "name": "supported_tokens",
        "outputs": [
            {
                "type": "bool",
                "name": "out"
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "arg0"
            }
        ],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2425
    },
    {
        "name": "SECONDS_PER_DAY",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2283
    },
    {
        "name": "POSITION_STATUS_OPEN",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2313
    },
    {
        "name": "POSITION_STATUS_CLOSED",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2343
    },
    {
        "name": "POSITION_STATUS_LIQUIDATED",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2373
    },
    {
        "name": "POSITION_TOPPED_UP",
        "outputs": [
            {
                "type": "uint256",
                "name": "out"
            }
        ],
        "inputs": [],
        "constant": true,
        "payable": false,
        "type": "function",
        "gas": 2403
    }
];
//# sourceMappingURL=ProtocolABI.js.map