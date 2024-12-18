"use client";

import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
} from "recharts";

export default function MyLineChart({
  data,
  xAxisKey,
  lineKey,
  unit,
  tickFormatter,
}: {
  data: unknown[];
  xAxisKey: string;
  lineKey: string | string[];
  unit: string;
  tickFormatter?: "millions";
}) {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="pl-2 pt-1 font-mono text-xxs font-semibold text-gray-1200">
        {unit}
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 15,
            right: 40,
            left: -20,
            bottom: 50,
          }}
        >
          <CartesianGrid stroke="var(--color-gray-400)" vertical={false} />
          <XAxis
            dataKey={xAxisKey}
            className="text-xxs"
            axisLine={false}
            tickCount={2}
            interval="preserveStartEnd"
            minTickGap={20}
          />
          <YAxis
            className="text-xxs"
            axisLine={false}
            tickFormatter={
              tickFormatter === "millions"
                ? (value: number) => String(value / 1000_000).concat("M")
                : undefined
            }
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-gray-200)",
              borderRadius: "0.125rem",
              border: "1px solid var(--color-gray-600)",
              fontFamily: "var(--font-geist-mono)",
            }}
            cursor={{
              stroke: "var(--color-gray-900)",
              strokeWidth: 1,
              strokeDasharray: "3 3",
            }}
            formatter={(value: number) =>
              Intl.NumberFormat("en-US").format(value)
            }
          />
          {typeof lineKey === "string" ? (
            <Line
              type="monotone"
              dataKey={lineKey}
              stroke="var(--accent-color-1)"
              dot={false}
              isAnimationActive={false}
              activeDot={false}
            />
          ) : (
            lineKey.map((key: string, index: number) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={`var(--accent-color-${index + 1})`}
                dot={false}
                isAnimationActive={false}
                activeDot={false}
              />
            ))
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
