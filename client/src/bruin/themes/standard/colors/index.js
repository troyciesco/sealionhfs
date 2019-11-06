export const colors = {
	// primary - purple
	primary: {
		light: "hsl(262, 61%, 93%)",
		t4: "hsl(262, 62%, 90%)",
		t3: "hsl(261, 68%, 84%)",
		t2: "hsl(261, 54%, 68%)",
		t1: "hsl(261, 47%, 58%)",
		default: "hsl(262, 43%, 51%)",
		s1: "hsl(262, 48%, 46%)",
		s2: "hsl(262, 60%, 38%)",
		s3: "hsl(262, 69%, 31%)",
		s4: "hsl(262, 72%, 25%)",
		dark: "hsl(263, 85%, 18%)"
	},

	// secondary - orange
	secondary: {
		light: "hsl(24, 100%, 96%)",
		t4: "hsl(24, 100%, 93%)",
		t3: "hsl(22, 100%, 85%)",
		t2: "hsl(20, 100%, 77%)",
		t1: "hsl(18, 100%, 70%)",
		default: "hsl(16, 94%, 61%)",
		s1: "hsl(14, 89%, 55%)",
		s2: "hsl(12, 86%, 47%)",
		s3: "hsl(10, 93%, 40%)",
		s4: "hsl(8, 92%, 35%)",
		dark: "hsl(6, 96%, 26%)"
	},

	// tertiary - cyan
	tertiary: {
		light: "hsl(171, 82%, 94%)",
		t4: "hsl(171, 85%, 90%)",
		t3: "hsl(172, 97%, 88%)",
		t2: "hsl(174, 96%, 78%)",
		t1: "hsl(176, 87%, 67%)",
		default: "hsl(178, 78%, 57%)",
		s1: "hsl(180, 77%, 47%)",
		s2: "hsl(182, 85%, 39%)",
		s3: "hsl(184, 90%, 34%)",
		s4: "hsl(186, 91%, 29%)",
		dark: "hsl(188, 91%, 23%)"
	},

	// success
	success: {
		light: "hsl(125, 65%, 93%)",
		t4: "hsl(125, 53%, 90%)",
		t3: "hsl(126, 49%, 84%)",
		t2: "hsl(122, 42%, 75%)",
		t1: "hsl(123, 38%, 63%)",
		default: "hsl(123, 35%, 51%)",
		s1: "hsl(122, 39%, 41%)",
		s2: "hsl(122, 47%, 35%)",
		s3: "hsl(125, 56%, 29%)",
		s4: "hsl(125, 73%, 20%)",
		dark: "hsl(125, 86%, 14%)"
	},

	// warning
	warning: {
		light: "hsl(45, 100%, 96%)",
		t4: "hsl(45, 93%, 92%)",
		t3: "hsl(45, 90%, 88%)",
		t2: "hsl(45, 86%, 81%)",
		t1: "hsl(43, 90%, 76%)",
		default: "hsl(43, 89%, 70%)",
		s1: "hsl(42, 78%, 60%)",
		s2: "hsl(42, 63%, 48%)",
		s3: "hsl(43, 72%, 37%)",
		s4: "hsl(43, 77%, 27%)",
		dark: "hsl(43, 86%, 17%)"
	},

	// danger
	danger: {
		light: "hsl(360, 100%, 97%)",
		t4: "hsl(360, 89%, 95%)",
		t3: "hsl(360, 82%, 89%)",
		t2: "hsl(360, 77%, 78%)",
		t1: "hsl(360, 71%, 66%)",
		default: "hsl(360, 64%, 55%)",
		s1: "hsl(360, 67%, 44%)",
		s2: "hsl(360, 72%, 38%)",
		s3: "hsl(360, 79%, 32%)",
		s4: "hsl(360, 85%, 25%)",
		dark: "hsl(360, 92%, 20%)"
	},

	// info
	info: {
		light: "hsl(202, 100%, 95%)",
		t4: "hsl(202, 100%, 90%)",
		t3: "hsl(204, 100%, 86%)",
		t2: "hsl(206, 93%, 73%)",
		t1: "hsl(208, 88%, 62%)",
		default: "hsl(210, 83%, 53%)",
		s1: "hsl(212, 92%, 43%)",
		s2: "hsl(214, 95%, 36%)",
		s3: "hsl(215, 96%, 32%)",
		s4: "hsl(216, 98%, 25%)",
		dark: "hsl(218, 100%, 17%)"
	},

	// neutral
	neutral: {
		none: "none",
		transparent: "transparent",
		light: "hsl(216, 33%, 97%)",
		t4: "hsl(214, 15%, 91%)",
		t3: "hsl(210, 16%, 82%)",
		t2: "hsl(211, 13%, 65%)",
		t1: "hsl(211, 10%, 53%)",
		default: "hsl(211, 12%, 43%)",
		s1: "hsl(209, 14%, 37%)",
		s2: "hsl(209, 18%, 30%)",
		s3: "hsl(209, 20%, 25%)",
		s4: "hsl(209, 22%, 19%)",
		dark: "hsl(210, 24%, 16%)"
	},
	white: "hsl(0, 0%, 100%)",
	black: "hsl(0, 0%, 0%)"
}

colors.light = colors.neutral.light
colors.dark = colors.neutral.dark
colors.primaryContrast = colors.primary.dark
// I can use primaryContrast and secondaryContrast to make sure that I automatically apply accessible colors
