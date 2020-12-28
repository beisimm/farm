/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_farmSecItem extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_pic:fgui.GLoader;
	public m_num:fgui.GTextField;
	public m_n5:fgui.GImage;
	public m_n6:fgui.GImage;
	public m_n7:fgui.GImage;
	public m_n8:fgui.GImage;
	public m_n9:fgui.GImage;
	public m_lockNum:fgui.GTextField;
	public m_n12:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugb03x3e";

	public static createInstance():UI_farmSecItem {
		return <UI_farmSecItem>(fgui.UIPackage.createObject("com", "farmSecItem"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
		this.m_num = <fgui.GTextField>(this.getChild("num"));
		this.m_n5 = <fgui.GImage>(this.getChild("n5"));
		this.m_n6 = <fgui.GImage>(this.getChild("n6"));
		this.m_n7 = <fgui.GImage>(this.getChild("n7"));
		this.m_n8 = <fgui.GImage>(this.getChild("n8"));
		this.m_n9 = <fgui.GImage>(this.getChild("n9"));
		this.m_lockNum = <fgui.GTextField>(this.getChild("lockNum"));
		this.m_n12 = <fgui.GImage>(this.getChild("n12"));
		this.m_t0 = this.getTransition("t0");
	}
}