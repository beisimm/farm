/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_farmItemZw extends fgui.GComponent {

	public m_n5:fgui.GLoader;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugb03x4k";

	public static createInstance():UI_farmItemZw {
		return <UI_farmItemZw>(fgui.UIPackage.createObject("com", "farmItemZw"));
	}

	protected onConstruct():void {
		this.m_n5 = <fgui.GLoader>(this.getChild("n5"));
		this.m_t0 = this.getTransition("t0");
	}
}