"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Fingerprint } from "lucide-react";
import { useEffect, useState } from "react";
import { MockDataBadge } from "../mock-data-badge";
interface ZKProofCardProps {
  status: "loading" | "result";
  result?: {
    proofHash: string;
    dataType: string;
    privacyLevel: string;
    anonymityScore: number;
    verificationTime: string;
    blockchain: string;
  };
}
// 矩阵雨字符
const matrixChars =
  "01アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF";
function MatrixRain() {
  const [columns, setColumns] = useState<Array<{ chars: string[]; x: number }>>(
    [],
  );
  useEffect(() => {
    // 创建 15 列矩阵雨
    const cols = Array.from({ length: 15 }, (_, i) => ({
      chars: Array.from(
        { length: 20 },
        () => matrixChars[Math.floor(Math.random() * matrixChars.length)],
      ),
      x: (i / 15) * 100,
    }));
    setColumns(cols);
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {columns.map((col, i) => (
        <motion.div
          key={i}
          className="absolute top-0 font-mono text-xs text-green-500 leading-none"
          style={{ left: `${col.x}%` }}
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        >
          {col.chars.map((char, j) => (
            <div key={j} className={j === 0 ? "text-white" : ""}>
              {char}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
export function ZKProofCard({ status, result }: ZKProofCardProps) {
  const [hexProgress, setHexProgress] = useState("0x");
  useEffect(() => {
    if (status === "loading") {
      const interval = setInterval(() => {
        setHexProgress((prev) => {
          const newHex = prev + Math.floor(Math.random() * 16).toString(16);
          return newHex.length > 20 ? "0x" + newHex.slice(-18) : newHex;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [status]);
  if (status === "loading") {
    return (
      <div className="relative bg-black border border-green-500/50 rounded-lg p-6 max-w-md overflow-hidden">
        <MatrixRain />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Shield className="w-6 h-6 text-green-400" />
            </motion.div>
            <span className="text-green-400 font-mono text-sm">
              Generating zk-SNARK Proof...
            </span>
          </div>
          <div className="bg-black/80 border border-green-500/30 rounded p-4 font-mono text-xs">
            <div className="text-green-600 mb-2">{`> Computing witness...`}</div>
            <div className="text-green-500 break-all">{hexProgress}</div>
            <motion.div
              className="mt-2 h-1 bg-green-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-green-600">
            <Lock className="w-3 h-3" />
            <span>Privacy Level: Maximum</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-black border border-green-500/50 rounded-lg p-6 max-w-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-400" />
          <span className="text-green-400 font-mono text-sm uppercase">
            ZK Proof Verified
          </span>
        </div>
        <span className="text-xs text-green-600 border border-green-500/30 px-2 py-1 rounded">
          {result?.privacyLevel}
        </span>
      </div>
      <div className="space-y-4">
        <div className="bg-green-950/30 border border-green-500/20 rounded p-3">
          <div className="text-xs text-green-600 mb-1">Proof Hash</div>
          <div className="font-mono text-xs text-green-400 break-all">
            {result?.proofHash}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-900 rounded p-3">
            <div className="text-xs text-slate-500 mb-1">Anonymity Score</div>
            <div className="text-2xl font-bold text-green-400">
              {result?.anonymityScore}%
            </div>
            <div className="flex gap-0.5 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-1 rounded-full ${
                    i < Math.floor((result?.anonymityScore || 0) / 20)
                      ? "bg-green-400"
                      : "bg-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="bg-slate-900 rounded p-3">
            <div className="text-xs text-slate-500 mb-1">Verification Time</div>
            <div className="text-xl font-bold text-white">
              {result?.verificationTime}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Fingerprint className="w-3 h-3" />
          <span>Trusted Setup: Groth16 | {result?.blockchain}</span>
          <MockDataBadge />
        </div>
      </div>
    </div>
  );
}
