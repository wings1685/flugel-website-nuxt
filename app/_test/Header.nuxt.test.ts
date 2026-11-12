import { describe, it, expect, vi, afterEach, beforeEach } from "vitest";
import { cleanup, screen } from "@testing-library/vue";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { Header } from "@/components/shared/Sections";

window.scrollTo = vi.fn();

describe('Header コンポーネントのナビゲーションテスト', () => {
	// 1. テストごとに初期パス '/' へリセット
	beforeEach(async () => {
		const router = useRouter();
		await router.push('/');
	});
	afterEach(() => {
		cleanup();
	});

	it('トップページ（/）のときの表示検証', async () => {
		await mountSuspended(Header, {
			attachTo: document.body,
		});

		// 3. 最初は "Home" に active クラスがついていることを確認
		const homeLink = screen.getByRole('link', { name: /Home/i });
		expect(homeLink.classList.contains('active')).toBe(true);
	});
	it('Types ページのとき active クラスが切り替わるか', async () => {
		const router = useRouter();
		await router.push('/types');

		// 4. 【検証】"Types" リンクに active クラスが付き、"Home" から外れたかを確認
		const homeLink = screen.getByRole('link', { name: /Home/i });
		expect(homeLink.classList.contains('active')).toBe(false);
		const typesLink = screen.getByRole('link', { name: /Types/i });
		expect(typesLink.classList.contains('active')).toBe(true);
	});
});
