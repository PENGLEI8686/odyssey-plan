# odyssey-plan

斯坦福「奥德赛计划」AI 引导师。

跟 AI 深聊 30 分钟，看清你一直回避的那个问题。这个 Skill 基于斯坦福大学《Designing Your Life》课程中的「奥德赛计划」方法论，通过 5 阶段深度对话，帮你诊断现状、发现内心矛盾、推演三条平行人生路径、压力测试真实代价，并设计最小成本实验。最终输出一份完整的「奥德赛计划书」。

## 它能帮你做什么

### 01 四维现状诊断

从健康、工作、娱乐、关系四个维度做一次人生体检。打分有锚定标准，不是 AI 随便安慰你。它会指出你高估了什么、低估了什么，以及最大的失衡在哪里。

### 02 工作观 × 人生观矛盾分析

帮你找到你以为是「选择困难」、其实是「价值观冲突」的底层矛盾。你以为在纠结选哪条路，可能其实在纠结自由和安全能不能同时拥有。

### 03 三条平行路径推演

推演三条完全不同的人生：沿现有轨道走、假设轨道断了、不考虑钱和面子。每条路都有 5 年里程碑、所需资源、信心指数和满意预期。

### 04 压力测试与人生锚点发现

逐条分析你低估了什么风险、必须放弃什么、最可能在哪里半途放弃。然后找到三条路的交集：那个不管走哪条路都会跟着你的东西，就是你真正的人生锚点。

### 05 最小成本实验设计

选一条最想探索的路，设计 3 个一周内能做完、接近零成本、能拿到真实反馈的实验。不是想清楚再开始，而是开始了才能想清楚。

### 06 自动生成奥德赛计划书

完整流程结束后，自动输出结构化 Markdown 报告，包含四维诊断、内在指南针、三条路径对比、人生锚点和本周行动清单。可以保存回看，也可以分享给信任的人讨论。

## 适合谁

- 对现状不满意，但说不清问题在哪里的人
- 在转行、跳槽、创业之间反复纠结的人
- 想系统梳理一次人生方向，而不是只听朋友劝的人
- 刚毕业或处在阶段转换期，不知道下一步该做什么的人

## 安装

推荐使用 npx 一键安装：

```bash
npx github:PENGLEI8686/odyssey-plan
```

安装完成后，重启 Codex，或在 Codex app 中使用 **Force Reload Skills**。

如果已经安装过旧版本，可以覆盖安装：

```bash
npx github:PENGLEI8686/odyssey-plan -- --force
```

如果你不想使用 npx，也可以直接 clone 到 Codex skills 目录：

```bash
mkdir -p ~/.agents/skills
git clone https://github.com/PENGLEI8686/odyssey-plan.git ~/.agents/skills/odyssey-plan
```

之后更新：

```bash
cd ~/.agents/skills/odyssey-plan
git pull
```

## 使用

Ask your AI assistant:

```text
帮我做一次人生推演
```

You can also explicitly invoke the skill by mentioning:

```text
$odyssey-plan
```

## 注意

- 全程约 30 分钟，建议找一个安静时间段一次做完
- 本 Skill 不做心理诊断，不替代专业心理咨询
- 它不会告诉你「应该选 X」，而是帮你看清楚，由你自己选择
- 如果中途需要暂停，会输出已完成阶段的小结，下次可以继续

## Files

- `SKILL.md`: Main Skill instructions
- `references/methodology.md`: Designing Your Life / Odyssey Plan methodology notes
- `references/examples.md`: Execution examples and quality calibration
- `assets/report-template.md`: Final report template

## License

MIT
